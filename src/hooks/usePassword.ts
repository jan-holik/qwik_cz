import { useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { T_Charset, getPassword, updateSets } from "~/utils/password";
import { useUrl } from "./useUrl";

export const usePassword = () => {
  const password = useSignal("");
  const characterSet = useSignal<T_Charset[]>([
    T_Charset.Low,
    T_Charset.Big,
    T_Charset.Number,
  ]);

  const { loc } = useUrl();
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => loc.isNavigating);
    const storageCharset = localStorage.getItem("charset");
    if (storageCharset && !loc.isNavigating) {
      characterSet.value = JSON.parse(storageCharset) as T_Charset[];
    }
  });

  return {
    password,
    characterSet,
    update$: $((set: T_Charset) => {
      const newCharset = updateSets(set, characterSet.value);
      characterSet.value = newCharset;
      localStorage.setItem("charset", JSON.stringify(newCharset));
    }),
    getPassword$: $(
      (power: number) =>
        (password.value = getPassword(power, characterSet.value)),
    ),
  };
};
