export function getContactApiUrl() {
  const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";
  return `${base}/api/contact`;
}
