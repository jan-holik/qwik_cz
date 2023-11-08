import { useLocation, z } from "@builder.io/qwik-city";

export const useUrl = () => {
  const loc = useLocation();

  const schemaUrl = z.string().url();

  const isExternalURL = (url: string): boolean =>
    schemaUrl.safeParse(url).success && new URL(url).origin !== loc.url.origin;

  const isCurrentPage = (pathname: string): boolean =>
    pathname === loc.url.pathname;

  return {
    isExternalURL,
    isCurrentPage,
  };
};
