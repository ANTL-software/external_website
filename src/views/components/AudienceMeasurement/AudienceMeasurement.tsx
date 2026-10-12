import { Analytics } from "@vercel/analytics/react";
import { useAudienceMeasurement } from "../../../hooks";
export function AudienceMeasurement() {
  const { allowed, beforeSend } = useAudienceMeasurement();
  return allowed ? <Analytics beforeSend={beforeSend} /> : null;
}
