import { $ } from "@builder.io/qwik";
import { useLocation, z } from "@builder.io/qwik-city";
import { pathnameUnification } from "~/utils/url";

export const useUrl = () => {
  const loc = useLocation();

  const isExternalURL$ = $((url: string): boolean => {
    const schemaUrl = z.string().url();
    return (
      schemaUrl.safeParse(url).success && new URL(url).origin !== loc.url.origin
    );
  });

  const isCurrentPath$ = $(
    (pathname: string): boolean =>
      pathnameUnification(pathname) === pathnameUnification(loc.url.pathname),
  );

  return {
    loc,
    isExternalURL$,
    isCurrentPath$,
  };
};
