export const camalise = function camalise(str) {
  if (str === undefined) { return }
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export const capitilise = function capitilise(str) {
  if (str === undefined) { return }
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  }).replace(/\s/g, "");
}