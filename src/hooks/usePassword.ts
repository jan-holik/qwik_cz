import { useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { T_Charset, getPassword, updateSets } from "~/utils/password";

export const usePassword = () => {
  const password = useSignal("");
  const characterSet = useSignal<T_Charset[]>([
    T_Charset.Low,
    T_Charset.Big,
    T_Charset.Number,
  ]);

  useVisibleTask$(() => {
    const storageCharset = localStorage.getItem("charset");
    if (storageCharset) {
      characterSet.value = JSON.parse(storageCharset) as T_Charset[];
    }
  });

  return {
    password,
    characterSet,
    update$: $((set: T_Charset) => {
      characterSet.value = updateSets(set, characterSet.value);
      localStorage.setItem("charset", JSON.stringify(characterSet.value))
    }),
    getPassword$: $(
      (power: number) =>
        (password.value = getPassword(power, characterSet.value)),
    ),
  };
};
