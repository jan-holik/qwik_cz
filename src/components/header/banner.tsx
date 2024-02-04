import { component$ } from "@builder.io/qwik";
import { Anchor } from "../basic/anchor";

export const Banner = component$(() => (
  <section
    id="banner"
    class="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700"
  >
    <p class="mx-auto flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
      <span>
        🤝 Český Qwik na Discordu: Rosteme sdílením.{" "}
        <Anchor href="https://discord.gg/JWqNDvuSYN">Přidej se k nám!</Anchor>
      </span>
    </p>
  </section>
));
