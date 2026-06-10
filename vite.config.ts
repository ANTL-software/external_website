import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin pour injecter le CSP dans l'HTML
function injectCSP() {
  return {
    name: 'inject-csp',
    transformIndexHtml(html: string) {
      return html.replace(
        /<head>/,
        `<head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com; img-src 'self' blob: data: https://*.antl.app https://www.google.com; object-src 'self' blob:; frame-src 'self' blob: https://api.antl.app; connect-src 'self' https://api.antl.fr https://api.antl.app https://antl-external-website.vercel.app https://api.emailjs.com https://fonts.googleapis.com https://unpkg.com; worker-src 'self' https://unpkg.com; base-uri 'self'; form-action 'self'; frame-ancestors 'none';">`
      )
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectCSP()],
})
