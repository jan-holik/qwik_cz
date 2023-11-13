
/**
 * Normalizes a URL pathname by removing optional leading and trailing "/" characters.
 * For root pathname "/" returns empty string.
 * 
 * @param pathname URL pathname property https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname
 * @returns Pathname without (optional) first and last "/" character. Example: "articles/radio"
 */
export const pathnameUnification = (pathname: string): string =>
  pathname
    .split("/")
    .filter((segment) => segment !== "")
    .join("/");
