import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Anchor } from "~/components/basic/anchor";
import { Paragraph, T_ParagraphVariant } from "~/components/basic/paragraph";

const Project = component$(() => {
  return (
    <section class="container m-auto py-8">
      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:px-48">
        Projekt{" "}
        <strong class="underline-offset-3 underline decoration-blue-400 decoration-8 dark:decoration-blue-600">
          Český Qwik
        </strong>
      </h1>

      <Paragraph
        variant={T_ParagraphVariant.FirstLetter}
        class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48"
      >
        Projekt “Český Qwik” vznikl pro podporu TypeScript frameworku Qwik v
        češtině a zároveň pro podporu českých a slovenských vývojářů,
        zajímajících se o Qwik, v jejich rodném (nebo blízkém) jazyce.
      </Paragraph>

      <Paragraph
        variant={T_ParagraphVariant.Leading}
        class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48"
      >
        Tento projekt je nasazen na{" "}
        <Anchor href="https://vercel.com">Vercel</Anchor>, pro stylování využívá{" "}
        <Anchor href="https://tailwindcss.com">Tailwind CSS</Anchor> a vlastní
        dynamické komponenty postavené na základě volně dostupných HTML kódů{" "}
        <Anchor href="https://flowbite.com">Flowbite</Anchor>, ovšem s vlastním
        TypeScriptem a logikou. Tyto mezi vývojáři oblíbené technologie byly
        zvoleny k demonstraci běžného použití Qwiku a snadného vývoje i nasazení
        projektu.
      </Paragraph>

      <Paragraph
        variant={T_ParagraphVariant.Leading}
        class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48"
      >
        Tento projekt (zatím) nijak nespolupracuje se společností Builder.io,
        Inc., vytvářející framework Qwik a veškeré dostupné informace, postupy a
        kódy nejsou oficiálně schválené.
      </Paragraph>

      <Paragraph class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48">
        Tvůrcem tohoto projektu je{" "}
        <Anchor href="https://www.linkedin.com/in/jan-holik/">Jan Holík</Anchor>
        , IČO: 06518435, Na pláni 2861/13, 150 00 Praha 5 - Smíchov. Fyzická
        osoba zapsaná v živnostenském rejstříku.
      </Paragraph>
    </section>
  );
});

export default Project;

export const head: DocumentHead = {
  title: "Projekt",
};
