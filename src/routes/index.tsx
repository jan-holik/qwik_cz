import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QwikInfo } from "~/components/qwik-info/qwikInfo";

export default component$(() => {
  return (
    <>
      <QwikInfo />
    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: "description",
      content: "Qwik a Qwik City framework v češtině.",
    },
  ],
};
