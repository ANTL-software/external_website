import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { COOKIE_CONSENT_STORAGE_KEY, consentExpiresAt, getStoredCookieConsent, saveCookieConsent } from '../src/services/cookie-consent.service.ts';
import { startAnalytics, stopAnalytics, trackPageView } from '../src/services/analytics.service.ts';

const now = Date.UTC(2026, 9, 12);
const storage = new Map();
const scripts = new Map();
const commands = [];
const cookieWrites = [];
globalThis.window = { localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }, location: { hostname: 'showcase.antl.fr', origin: 'https://showcase.antl.fr', pathname: '/', href: 'https://showcase.antl.fr/?email=private@example.com' } };
globalThis.document = {
 title: 'antl', referrer: '',
 head: { appendChild: script => scripts.set(script.id, script) },
 createElement: () => ({ remove() { scripts.delete(this.id); } }),
 getElementById: id => scripts.get(id),
 get cookie() { return '_ga=identifier; _ga_47QNW9WCG8=session; necessary=keep'; },
 set cookie(value) { cookieWrites.push(value); },
};

test('both refusal and acceptance survive a visit and expire after six months', () => {
 for (const choice of ['rejected', 'accepted']) {
  saveCookieConsent(choice, now);
  assert.equal(getStoredCookieConsent(now + 1000), choice);
  assert.equal(getStoredCookieConsent(consentExpiresAt(now)), 'undecided');
 }
 assert.equal(new Date(consentExpiresAt(Date.UTC(2026, 7, 31))).toISOString().slice(0, 10), '2027-02-28');
});
test('invalid or inaccessible storage never grants consent', () => {
 for (const raw of ['not-json', 'null', '{}', JSON.stringify({version:1,status:'accepted',createdAt:now+1,expiresAt:consentExpiresAt(now)})]) {
  storage.set(COOKIE_CONSENT_STORAGE_KEY, raw);
  assert.equal(getStoredCookieConsent(now), 'undecided');
 }
 const normal = window.localStorage;
 window.localStorage = { getItem() { throw new Error('disabled'); }, setItem() { throw new Error('disabled'); } };
 assert.equal(getStoredCookieConsent(now), 'undecided');
 assert.doesNotThrow(() => saveCookieConsent('rejected', now));
 window.localStorage = normal;
});
test('analytics starts only when called, is idempotent, and stops on withdrawal', () => {
 trackPageView();
 assert.equal(scripts.size, 0);
 startAnalytics();
 startAnalytics();
 assert.equal(scripts.size, 1);
 assert.match(scripts.get('antl-google-analytics').src, /G-47QNW9WCG8/);
 trackPageView();
 commands.push(...window.dataLayer.map(command => Array.from(command)));
 const config = commands.find(command => command[0] === 'config')[2];
 assert.equal(config.cookie_domain, 'showcase.antl.fr');
 assert.equal(config.allow_google_signals, false);
 assert.equal(commands.find(command => command[0] === 'event')[2].page_location, 'https://showcase.antl.fr/');
 stopAnalytics();
 trackPageView();
 assert.equal(window['ga-disable-G-47QNW9WCG8'], true);
 assert.equal(scripts.size, 0);
 assert.equal(window.dataLayer.length, 0);
 assert.ok(cookieWrites.some(cookie => cookie.startsWith('_ga=')));
 assert.ok(cookieWrites.every(cookie => !cookie.startsWith('necessary=')));
});
test('optional analytics scripts are absent from the initial HTML', () => {
 const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
 assert.equal(/<script[^>]+(?:googletagmanager|google-analytics|insights)/.test(html), false);
 const hook = readFileSync(new URL('../src/hooks/useAudienceMeasurement.ts', import.meta.url), 'utf8');
 assert.ok(hook.includes('status === "accepted"'));
});
