import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

const NotFoundPage = component$(() => {
  return (
    <section>
      <h1>Stránka nenalezena. Chyba 404</h1>
    </section>
  );
});
export default NotFoundPage;

export const head: DocumentHead = {
  title: "Stránka nenalezena. Chyba 404",
};
