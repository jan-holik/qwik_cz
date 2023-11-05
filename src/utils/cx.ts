import clsx, { ClassValue } from 'clsx';

type TemplateLike = TemplateStringsArray | ClassValue
type ParamsLike = ClassValue[]


/**
 * Tagged Template Literals for clsx and Tailwind
 * https://al-az.me/blog/clsx-tailwind-template-literal
 * @param template Template literals Tailwind classes
 * @param params ClassValue from clxs
 * @returns string (Tailwind classes in one row return from clxs)
 */
const cx = (template: TemplateLike, ...params: ParamsLike): string => {
  if (typeof template === 'string') return clsx(template, ...params)

  template = Array.isArray(template) ? template : [template]
  let merged = template.join('') + params.join('')
  merged = merged.replace(/\s+/g, ' ').trim()

  return clsx(merged)
}

export default cx
