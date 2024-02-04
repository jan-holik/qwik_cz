import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Anchor } from "~/components/basic/anchor";
import { Paragraph, T_ParagraphVariant } from "~/components/basic/paragraph";

const Email = component$(() => {
  return (
    <section class="container m-auto py-8">
      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:px-48">
        <strong class="underline-offset-3 underline decoration-blue-400 decoration-8 dark:decoration-blue-600">
          E-mail
        </strong>{" "}
        zdarma
      </h1>

      <Paragraph
        variant={T_ParagraphVariant.FirstLetter}
        class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48"
      >
        E-mail ve tvaru jmeno.prijmeni@qwik.cz můžeš mít zcela zdarma! Stačí si
        o něj napsat na{" "}
        <Anchor href="https://discord.gg/JWqNDvuSYN">Discrordu</Anchor>,{" "}
        <Anchor href="https://www.linkedin.com/in/jan-holik/">LinkedInu</Anchor>{" "}
        nebo e-mailem na adresu jan.holik na této doméně. Jedinou podmínkou je
        používat e-mail seriózně, nepoškozovat dobré jméno Qwik.cz, nerozesílat
        SPAM a mít pozitivní postoj k frameworku Qwik.
      </Paragraph>

      <Paragraph
        variant={T_ParagraphVariant.Leading}
        class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48"
      >
        E-mail s vlastním jménem na doméně @qwik.cz technicky běží na české
        službě{" "}
        <Anchor href="https://emailprofi.cz">E-Mail Profi od Seznamu</Anchor>,
        takže Tě čeká známé rozhraní, datově neomezená velikost schránky,
        možnost využívat SMTP, POP3 a IMAP protokol a všechno ostatní, co Seznam
        nabízí. Díky tomu můžeš svoji novou e-mailovou schránku pohodlně
        používat na všech zařízeních nebo si ji nechat synchronizovat do své
        stávající e-mailové schránky například na Gmailu nebo jinde.
      </Paragraph>

      <Paragraph class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48">
        E-mail s vlastním jménem Ti pomůže vystupovat profesionálně, což oceníš
        zejména pokud si hledáš novou spolupráci v IT a nemáš koupenou vlastní
        doménu. Framework Qwik je nová technologie budoucnosti a používáním
        e-mailu na této doméně deklaruješ, že se aktivně zajímáš o nové
        technologie, což jsou plusové body i když se budeš hlásit na pozici, kde
        zatím Qwik nevyužiješ - ostatně při vývoji v Qwiku se hodně dozvíš o
        TSX/JSX, TypeScriptu a JavaScriptu, což jsou technologie používané
        prakticky všude.
      </Paragraph>

      <Paragraph class="bg-gray-50 px-4 py-6 sm:px-16 xl:px-48">
        O bezpečnost Tvých dat a e-mailů se bát nemusíš. K nim se nikdo z
        qwik.cz nedostane. Jen Ti bude zřízen účet s Tvým jménem a počátečním
        heslem, které si pak musíš změnit a dál už jen to jen mezi Tebou a
        Seznamem - nikdo jiný se k Tvým datům a e-mailům nemůže dostat.
      </Paragraph>
    </section>
  );
});
export default Email;

export const head: DocumentHead = {
  title: "E-mail zdarma",
};
