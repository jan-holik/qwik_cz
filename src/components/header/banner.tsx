import { component$ } from "@builder.io/qwik";

export const Banner = component$(() => (
  <section
    id="banner"
    class="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700"
  >
      <p class="mx-auto flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
        <span>
          🤝 Český Qwik na Discordu: Rosteme sdílením.{" "}
          <a
            href="https://discord.gg/JWqNDvuSYN"
            target="_blank"
            class="decoration-600 dark:decoration-500 inline font-medium text-blue-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-blue-500"
          >
            Přidej se k nám!
          </a>
        </span>
      </p>
  </section>
));
