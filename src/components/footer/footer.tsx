import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { clsx } from "clsx";
import { useUrl } from "~/hooks/useUrl";
import { navbarStaticData } from "../header/navbar";

type T_FooterLinkSections = {
  title: string;
  links: Array<
    {
      text: string;
    } & QwikIntrinsicElements["a"]
  >;
}[];

const footerStaticData: T_FooterLinkSections = [
  {
    title: "Technologie",
    links: [
      { text: "Qwik", href: "https://qwik.dev/" },
      { text: "Flowbite", href: "https://flowbite.com/" },
      { text: "Vercel", href: "https://vercel.com/" },
      { text: "Email Profi", href: "https://emailprofi.cz/" },
    ],
  },
  {
    title: "Qwik.cz",
    links: navbarStaticData.map(({ text, path }) => ({ text, href: path })),
  },
];

export const Footer = component$<{ links?: T_FooterLinkSections }>(
  ({ links = footerStaticData }) => {
    const url = useUrl();
    return (
      <footer class="mt-auto border-t-2 border-t-violet-900 bg-gray-100 dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
            {links.map((section) => (
              <div key={section.title}>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <ul class="font-medium text-gray-500 dark:text-gray-400">
                  {section.links.map(
                    async ({
                      text,
                      class: className,
                      href,
                      ...props
                    }) => {
                      const computedClass = clsx([
                        "hover:underline",
                        className,
                      ]);
                      return (
                        <li key={text} class="mb-4">
                          {href && (await url.isExternalURL$(href)) ? (
                            <a
                              href={href}
                              target="_blank"
                              class={computedClass}
                              {...props}
                            >
                              {text}
                            </a>
                          ) : (
                            <Link href={href} class={computedClass} {...props}>
                              {text}
                            </Link>
                          )}
                        </li>
                      );
                    },
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div class="bg-gray-100 px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              S ❤️‍🔥 vytvořil{" "}
              <a href="https://www.linkedin.com/in/jan-holik/" target="_blank">
                Jan Holík
              </a>
              . Všechna práva vyhrazena.
            </span>
            <div class="mt-4 flex space-x-5 sm:justify-center md:mt-0">
              <a
                href="https://discord.gg/JWqNDvuSYN"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);
