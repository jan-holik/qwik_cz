import { QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import {
  variantButtonColorTailwind,
  variantButtonSizeTailwind,
} from "./buttonVariant";
import cx from "~/utils/cx";

type T_Button = {
  variant?: {
    color?: T_ButtonColor;
    size?: T_ButtonSize;
  };
} & QwikIntrinsicElements["button"];

enum T_ButtonColor {
  Default,
  Alternative,
  Dark,
  Light,
  Green,
  Red,
  Yellow,
  Purple,
}

enum T_ButtonSize {
  ExtraSmall,
  Small,
  Base,
  Large,
  ExtraLarge,
}

export const Button = component$<T_Button>(
  ({ type = "button", class: className, variant, ...props }) => {
    const setVariant: Required<T_Button["variant"]> = Object.assign(
      {},
      {
        color: T_ButtonColor.Default,
        size: T_ButtonSize.Base,
      },
      variant,
    );

    const computedClass = cx`
      rounded-lg
      focus:outline-none
      focus:ring-4
      font-medium
      text-center
      ${variantButtonColorTailwind[setVariant.color]}
      ${variantButtonSizeTailwind[setVariant.size]}
    `;

    return (
      <button type={type} class={computedClass} {...props}>
        <Slot />
      </button>
    );
  },
);
