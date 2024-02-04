import {
  type QwikIntrinsicElements,
  Slot,
  component$,
  useTask$,
  useSignal,
} from "@builder.io/qwik";
import { useUrl } from "~/hooks/useUrl";
import cx from "~/utils/cx";

type T_Anchor = QwikIntrinsicElements["a"];

export const Anchor = component$<T_Anchor>(
  ({ class: className, target, href, ...props }) => {
    const { isExternalURL$ } = useUrl();
    const computedTarget = useSignal<T_Anchor["target"]>(target);

    useTask$(async () => {
      if (target) {
        return;
      }
      const getTarget = async (): Promise<T_Anchor["target"]> => {
        return href && (await isExternalURL$(href)) ? "_blank" : undefined;
      };
      computedTarget.value = await getTarget();
    });

    const computedClass = cx`
      inline
      font-medium
      text-blue-600
      underline
      decoration-solid
      underline-offset-2
      hover:no-underline
      dark:text-blue-500
      ${className}
    `;

    const updatedProps: T_Anchor = Object.assign(
      {},
      { ...props },
      { class: computedClass },
      { href },
      { target: computedTarget.value },
    );

    return (
      <a {...updatedProps}>
        <Slot />
      </a>
    );
  },
);
