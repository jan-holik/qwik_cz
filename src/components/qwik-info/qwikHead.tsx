import { component$ } from "@builder.io/qwik";

export const QwikHead = component$(() => (
  <div class="container m-auto text-center pb-8">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:px-48">
      Qwik je jako React, ale novější, rychlejší, geniální!
    </h1>
    <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 px-4 sm:px-16 lg:text-xl xl:px-48">
      TypeScript framework Qwik je založený na JSX, stejně jako React a podporuje jeho nejmodernější patterny jako Signals, Hooks a další.
      Místo hydratace, ale využívá lazy-loading umožněný serializací kódu, což mu umožňuje neuvěřitelnou rychlost.
      Zní to sice složitě, ale není to tak těžké. Za vším stojí jediný znak: $.
    </p>
    <a
      href="https://qwik.dev/"
      target="_blank"
      class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
    >
      📚 Poznej víc
      <svg
        class="ml-2 h-3.5 w-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
));
