import { component$ } from "@builder.io/qwik";
import { QwikHead } from "./qwikHead";
import { Paragraph } from "./paragraph";

export const QwikInfo = component$(() => (
  <section class="py-8 bg-violet-50">
    <QwikHead />
  </section>
));
