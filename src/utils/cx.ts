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

  const converted = Array.isArray(template) ? template : [template];
  const merged = converted.join(" ") + params.join(" ");

  return clsx(merged.replace(/\s+/g, " ").trim());
};

export default cx;
