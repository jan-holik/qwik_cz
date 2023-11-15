import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

const Email = component$(() => {
  return (
    <section>
      <h1>E-mail zdarma</h1>
    </section>
  );
});
export default Email;

export const head: DocumentHead = {
  title: "E-mail zdarma",
};
