import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

const Password = component$(() => {
  return (
    <section>
      <h1>Generátor hesla</h1>
    </section>
  );
});
export default Password;

export const head: DocumentHead = {
  title: "Generátor hesla",
};
