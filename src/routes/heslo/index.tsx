import { component$, $, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/basic/button";
import { Input } from "~/components/basic/input";
import { Paragraph } from "~/components/basic/paragraph";
import { usePassword } from "~/hooks/usePassword";
import { T_Charset } from "~/utils/password";

const Password = component$(() => {
  const usePass = usePassword();
  const passStrong = useSignal("20");
  const clipboardNow = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => clipboardNow.value);
    if (clipboardNow.value) {
      setTimeout(() => {
        clipboardNow.value = false;
      }, 2000);
    }
  });

  const handleGetPassword = $(async () => {
    let inputNumber = Number(passStrong.value) || 0;

    switch (true) {
      case inputNumber < 8:
        inputNumber = 8;
        passStrong.value = inputNumber.toString();
        break;
      case inputNumber > 128:
        inputNumber = 128;
        passStrong.value = inputNumber.toString();
        break;
    }

    await usePass.getPassword$(inputNumber);
  });

  const handleChecked = (set: T_Charset) =>
    usePass.characterSet.value.includes(set);

  const handleInputChange = (set: T_Charset) =>
    $(async () => await usePass.update$(set));

  const handleCopy = $(async () => {
    clipboardNow.value = true;
    await navigator.clipboard.writeText(usePass.password.value);
  });

  return (
    <section class="container m-auto flex flex-col items-center gap-6 py-8 text-center">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:px-48">
        Generátor hesla
      </h1>
      <Input type="number" min="8" max="128" bind:value={passStrong}>
        Počet znaků hesla (8 - 128)
      </Input>
      <Input
        type="checkbox"
        checked={handleChecked(T_Charset.Low)}
        onInput$={handleInputChange(T_Charset.Low)}
      >
        Malá písmena (abc)
      </Input>
      <Input
        type="checkbox"
        checked={handleChecked(T_Charset.Big)}
        onInput$={handleInputChange(T_Charset.Big)}
      >
        Velká písmena (ABC)
      </Input>
      <Input
        type="checkbox"
        checked={handleChecked(T_Charset.Number)}
        onInput$={handleInputChange(T_Charset.Number)}
      >
        Číslice (012)
      </Input>
      <Input
        type="checkbox"
        checked={handleChecked(T_Charset.Special)}
        onInput$={handleInputChange(T_Charset.Special)}
      >
        Speciální znaky (#=%)
      </Input>
      <Input
        type="checkbox"
        checked={handleChecked(T_Charset.Emoji)}
        onInput$={handleInputChange(T_Charset.Emoji)}
      >
        Emoji (🧑‍🚀🦌)
      </Input>
      <Button onClick$={handleGetPassword}>Generovat</Button>
      {usePass.password.value && (
        <div class="py-5">
          <h2 class="mb-3 text-4xl font-bold dark:text-white">
            Vygenerované heslo
          </h2>
          <Paragraph class="break-all">{usePass.password.value}</Paragraph>
          <Button
            onClick$={handleCopy}
            disabled={clipboardNow.value}
          >
            {clipboardNow.value
              ? "Zkopírováno do schránky ✔️"
              : "Kopírovat do schránky 📋"}
          </Button>
        </div>
      )}
    </section>
  );
});
export default Password;

export const head: DocumentHead = {
  title: "Generátor hesla",
};
