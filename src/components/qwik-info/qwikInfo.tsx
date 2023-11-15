import { component$ } from "@builder.io/qwik";
import { QwikHead } from "./qwikHead";
import { Paragraph, T_ParagraphVariant } from "../basic/paragraph";

export const QwikInfo = component$(() => (
  <section class="bg-violet-50 py-8">
    <QwikHead />
    <div class="container m-auto">
      <Paragraph
        variant={T_ParagraphVariant.FirstLetter}
        class="bg-white py-6 px-4 sm:px-16 xl:px-48"
      >
        Qwik Ti vydělá více peněz! Rychlost webové aplikace (webu) je zásadní
        pro její obchodní výkon. Rychlejší weby dosahují lepších výsledků ve
        vyhledávačích, systémech PPC reklamy, vyšších konverzních poměrů a
        nižšího poměru okamžitého opuštění webu. Jednoduše je rychlý web
        vyhledávači více doporučován uživatelům, kteří jej pak více a raději
        používají, což vytváří pro tento web konkurenční výhodu a jeho
        provozovateli přináší více peněz, které získá od uživatelů (zákazníků).
        I pokud nejsi přímým majitelem webu, ale vývojářem, máš plné právo žádat
        podíl na vyšších ziscích vydělaných lepším webem, který jsi pomohl
        vytvořit. Rychlejší web tak vydělá více peněz i Tobě, ať už web vlastníš
        nebo na něm pracuješ jako IT vývojář.
      </Paragraph>

      <Paragraph
        variant={T_ParagraphVariant.Leading}
        class="bg-white py-6 px-4 sm:px-16 xl:px-48"
      >
        Když se podíváš na pracovní portály, pravděpodobně nenajdeš pro Qwik
        žádné pracovní poptávky. Qwik se také neučí na žádných školách v ČR. To
        je pro Tebe obrovská výhoda! Jsi před trhem a ne za ním! Až Qwik
        pronikne na český trh, budeš patřit k úzké elitě vývojářů, kteří se
        budou moci pochlubit zkušeností s Qwikem. Tvoje znalosti budou unikátní
        a firmy je nutně budou potřebovat pro své projekty - to bude definovat
        Tvé vyjednávací postavení pro podmínky spolupráce, jehož součástí je Tvá
        odměna.
      </Paragraph>

      <Paragraph class="bg-white py-6 px-4 sm:px-16 xl:px-48">
        Za Qwikem stojí původní tvůrce známého Angularu a exGoogler, Miško
        Hevery, který nyní zastává pozici CTO ve společnosti Builder.io, Inc.
        sídlící v Silicon Valley. Kromě geniálních technologických řešení, s
        kterými se v Qwiku potkáš, se tak orientací na Qwik zároveň orientuješ
        na přední místa v IT businessu vůbec. Builder se věnuje také AI a
        spolupracuje s Figmou na produktu Visual Copilot, který umí generovat z
        grafických návrhů Figma funkční komponenty s kvalitním kódem pro různé
        frameworky včetně Qwiku. V Builderu působí jako investor skupina
        Greylock Partners, která působí v dalších úspěšných projektech jako je
        Airbnb, Discord, Docker, Dropbox, Facebook, Figma, LinkedIn, Medium,
        StackBlitz a mnoho dalších. Věnovat se Qwiku tak automaticky znamená
        blízkost komunit s obrovským potenciálem. Qwik je skvělá volba!
      </Paragraph>
    </div>
  </section>
));
