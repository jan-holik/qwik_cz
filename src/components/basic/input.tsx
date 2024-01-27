import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import cx from "~/utils/cx";

export type T_Input = {
  variant?: T_InputVariant;
} & Omit<QwikIntrinsicElements["input"], "children"> & {
  onInput$?: QwikIntrinsicElements["input"]["onInput$"]
};

export enum T_InputVariant {
  Default,
  Small,
  Large,
}

export const Input = component$<T_Input>(
  ({ class: className, variant = T_InputVariant.Default, ...props }) => {
    const variantTailwind = [
      `
      bg-gray-50
      border
      border-gray-300
      text-gray-900 text-sm
      rounded-lg
      focus:ring-blue-500
      focus:border-blue-500
      block w-full p-2.5
      dark:bg-gray-700
      dark:border-gray-600
      dark:placeholder-gray-400
      dark:text-white
      dark:focus:ring-blue-500
      dark:focus:border-blue-500
      `,
      `
      block
      w-full
      p-2
      text-gray-900
      border
      border-gray-300
      rounded-lg
      bg-gray-50
      sm:text-xs
      focus:ring-blue-500
      focus:border-blue-500
      dark:bg-gray-700
      dark:border-gray-600
      dark:placeholder-gray-400
      dark:text-white
      dark:focus:ring-blue-500
      dark:focus:border-blue-500
      `,
      `
      block
      w-full
      p-4
      text-gray-900
      border
      border-gray-300
      rounded-lg
      bg-gray-50
      sm:text-md
      focus:ring-blue-500
      focus:border-blue-500
      dark:bg-gray-700
      dark:border-gray-600
      dark:placeholder-gray-400
      dark:text-white
      dark:focus:ring-blue-500
      dark:focus:border-blue-500
      `,
    ];

    const computedClass = cx`
      mt-2
      ${variantTailwind[variant]}
      ${className}
    `;

    return (
      <label class="block text-sm font-medium text-gray-900 dark:text-white max-w-max">
        <Slot />
        {props["bind:value"] ? (
          <input
            class={computedClass}
            bind:value={props["bind:value"]}
            {...props}
          />
        ) : (
          <input class={computedClass} {...props}/>
        )}
      </label>
    );
  },
);
