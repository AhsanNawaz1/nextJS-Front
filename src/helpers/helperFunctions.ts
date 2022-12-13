export function generateSlug(val: string) {
  return val.toLowerCase().replace(/\s|\//g, '-');
}
