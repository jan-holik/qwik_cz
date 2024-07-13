import { component$, $, useSignal, useTask$ } from "@builder.io/qwik";
import { isBrowser } from "@builder.io/qwik/build";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/basic/button";
import { Input } from "~/components/basic/input";
import { Paragraph } from "~/components/basic/paragraph";
import { usePassword } from "~/hooks/usePassword";
import { T_Charset } from "~/utils/password";

type T_inputList = {
  charset: T_Charset;
  text: string;
}[];

const Password = component$(() => {
  const usePass = usePassword();
  const passStrong = useSignal("20");
  const clipboardNow = useSignal(false);

  useTask$(({ track }) => {
    track(() => clipboardNow.value);
    if (isBrowser) {
      if (clipboardNow.value) {
        setTimeout(() => {
          clipboardNow.value = false;
        }, 2000);
      }
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

  const inputList: T_inputList = [
    {
      charset: T_Charset.Low,
      text: "Malá písmena (abc)",
    },
    {
      charset: T_Charset.Big,
      text: "Velká písmena (ABC)",
    },
    {
      charset: T_Charset.Number,
      text: "Číslice (012)",
    },
    {
      charset: T_Charset.Special,
      text: "Speciální znaky (#=%)",
    },
    {
      charset: T_Charset.Emoji,
      text: "Emoji (🧑‍🚀🦌)",
    },
  ];

  return (
    <section class="container m-auto flex flex-col items-center gap-6 py-8 text-center">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl xl:px-48 dark:text-white">
        Generátor hesla
      </h1>
      <Input
        inputAttributes={{
          type: "number",
          min: "8",
          max: 128,
          "bind:value": passStrong,
        }}
        labelAttributes={{
          class: "max-w-max",
        }}
      >
        <span>Počet znaků hesla (8 - 128)</span>
      </Input>

      {inputList.map(({ charset, text }) => (
        <Input
          key={charset}
          inputAttributes={{
            type: "checkbox",
            checked: handleChecked(charset),
            onInput$: handleInputChange(charset),
            class: "self-center",
          }}
          labelAttributes={{ class: "flex flex-col items-center max-w-max" }}
        >
          {text}
        </Input>
      ))}

      <Button onClick$={handleGetPassword}>Generovat</Button>
      {usePass.password.value && (
        <div class="py-5">
          <h2 class="mb-3 text-4xl font-bold dark:text-white">
            Vygenerované heslo
          </h2>
          <Paragraph class="break-all">{usePass.password.value}</Paragraph>
          <Button onClick$={handleCopy} disabled={clipboardNow.value}>
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
