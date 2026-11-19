export function withImageVersion(url: string, version: string): string {
  if (!version) return url;

  const parsed = new URL(url, window.location.href);
  parsed.searchParams.set('v', version);

  return parsed.toString();
}
