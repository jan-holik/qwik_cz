import clsx, { type ClassValue } from "clsx";

type TemplateLike = TemplateStringsArray | ClassValue;
type ParamsLike = ClassValue[];

/**
 * Tagged Template Literals for clsx and Tailwind
 * https://al-az.me/blog/clsx-tailwind-template-literal
 * (Own refactor and bug fix for arrays in template)
 * @param template Template literals Tailwind classes
 * @param params ClassValue from clxs
 * @returns string (Tailwind classes in one row return from clxs)
 */
const cx = (template: TemplateLike, ...params: ParamsLike): string => {
  if (typeof template === "string") return clsx(template, ...params);

  const itemNarrow = (item: TemplateLike | ParamsLike) =>
    Array.isArray(item) ? item.join(" ") : item;

  const templateArray = Array.isArray(template) ? template : [template];
  const templateString = templateArray.map((item) => itemNarrow(item));
  const paramsString = params.map((item) => itemNarrow(item));
  const merged = `${templateString.join(" ")} ${paramsString.join(" ")}`;

  return clsx(merged.replace(/\s+/g, " ").trim());
};

export default cx;
