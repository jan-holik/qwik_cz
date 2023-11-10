import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { appInfo } from "~/root";
import { clsx } from "clsx";
import cx from "~/utils/cx";

type T_NavbarLinks = {
  text: string;
  path: `/${string}`;
}[];

enum T_NavbarLinkVariant {
  Inactive,
  Active,
}

const navbarStaticData: T_NavbarLinks = [
  { text: "Úvod", path: "/" },
  { text: "Generátor hesla", path: "/heslo/" },
  { text: "E-mail zdarma", path: "/email/" },
  { text: "Projekt", path: "/projekt/" },
];

export const Navbar = component$<{ links?: T_NavbarLinks }>(
  ({ links = navbarStaticData }) => {
    const expanded = useSignal(false);
    const loc = useLocation();
    const handleCloseExpanded = $(() => (expanded.value = false));
    const linkVariantTailwind = [
      `
      block
      rounded
      py-2
      pl-3
      pr-4
      text-gray-900
      hover:bg-gray-100
      dark:text-white
      dark:hover:bg-gray-700
      dark:hover:text-white
      md:border-0
      md:p-0
      md:hover:bg-transparent
      md:hover:text-blue-700
      md:dark:hover:bg-transparent
      md:dark:hover:text-blue-500
      `,
      `
      block
      rounded
      bg-blue-700
      py-2
      pl-3
      pr-4
      text-white
      dark:bg-blue-600
      md:bg-transparent
      md:p-0
      md:text-blue-700
      md:dark:bg-transparent
      md:dark:text-blue-500
      `,
    ];

    return (
      <nav class="border-b-4 border-gray-200 border-b-violet-900 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/" class="flex items-center">
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              {appInfo.websiteName}
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-solid-bg"
            aria-expanded={expanded.value}
            onClick$={() => (expanded.value = !expanded.value)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class={clsx(
              "w-full md:block md:w-auto",
              !expanded.value && "hidden",
            )}
            id="navbar-solid-bg"
          >
            <ul class="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent">
              {!loc.isNavigating && links.map(({ text, path }) => {
                const currentPage = loc.url.pathname === path;
                const ariaCurrent = currentPage && "page";
                const computedClass = cx`${
                  currentPage
                    ? linkVariantTailwind[T_NavbarLinkVariant.Active]
                    : linkVariantTailwind[T_NavbarLinkVariant.Inactive]
                }`;
                return (
                  <li key={path}>
                    <Link
                      href={path}
                      class={computedClass}
                      aria-current={ariaCurrent}
                      onClick$={handleCloseExpanded}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  },
);
