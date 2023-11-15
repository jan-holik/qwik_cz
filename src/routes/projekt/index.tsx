import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

const Project = component$(() => {
  return (
    <section class="container m-auto py-8">
      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:px-48">
        Projekt{" "}
        <strong class="underline-offset-3 underline decoration-blue-400 decoration-8 dark:decoration-blue-600">
          Český Qwik
        </strong>
      </h1>
    </section>
  );
});

export default Project;

export const head: DocumentHead = {
  title: "Projekt",
};
