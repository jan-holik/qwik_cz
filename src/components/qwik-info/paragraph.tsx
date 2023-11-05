import { component$, Slot, type QwikIntrinsicElements } from "@builder.io/qwik";
import cx from "~/utils/cx";

export enum T_ParagraphVariant {
  Default,
  Leading,
  FirstLetter,
}

type T_Paragraph = {
  variant?: T_ParagraphVariant;
} & QwikIntrinsicElements["p"];

export const Paragraph = component$<T_Paragraph>(
  ({ class: className, variant = T_ParagraphVariant.Default, ...props }) => {
    
    const variantTailwind = [
      `
      mb-3
      text-gray-500
      dark:text-gray-400
      `,
      `
      mb-3
      text-lg
      text-gray-500
      md:text-xl
      dark:text-gray-400
      `,
      `
      mb-3
      text-gray-500
      dark:text-gray-400
      first-line:uppercase
      first-line:tracking-widest
      first-letter:text-7xl
      first-letter:font-bold
      first-letter:text-gray-900
      dark:first-letter:text-gray-100
      first-letter:mr-3
      first-letter:float-left
      `,
    ];

    const computedClass = cx`
      ${variantTailwind[variant]}
      ${className}
    `;

    return (
      <p class={computedClass} {...props}>
        <Slot />
      </p>
    );
  },
);
