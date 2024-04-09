export function removeLocaleFromPath(path: string) {
  return path.replace(/^\/[a-z]{2}/, "");
}