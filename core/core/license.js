export function validateLicense(key) {
  if (!key) return { valid: false, reason: "NO KEY" };

  if (key.startsWith("OPIK-")) {
    return { valid: true, plan: "premium" };
  }

  return { valid: false, reason: "INVALID" };
}
