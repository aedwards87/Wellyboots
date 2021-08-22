// Remove space and camalise text
export const camalise = function camalise(str) {
  if (str === undefined) { return }
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// Remove space and capitilise text
export const capitilise = function capitilise(str) {
  if (str === undefined) { return }
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  }).replace(/\s/g, "");
}

// Using .test on regExp searches for any letter found (e.g. 'px, vw') within input, to help determine whether it's a strict value or a selection from a CSS variable value 
export const regExpLetterChecker = (str) => /[a-zA-Z]/g.test(str)

// Replace '&' wth 'And' in string
export const replaceAmpersand = (str) => str.replace('&', 'And')

// If the words white or black are used, replace with light or dark
export const blackOrWhite = function blackOrWhite(str) {
  const capStr = capitilise(str)
  if (str === undefined) { return }
  if (capStr === 'white') { return 'Light' }
  if (capStr === 'White') { return 'Light' }
  if (capStr === 'black') { return 'Dark' }
  if (capStr === 'Black') { return 'Dark' } else { return str }
}

// Only run the input function every so often (wait = timer), used to optimise performance
export function debounce(func, wait = 5, immediate = true) {
  let timeout
  return function () {
    const context = this, args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// Takes in a string and position of where a space is to be inserted and returns the value
export function addSpaceToString(str, position = 5) {
  return `${str.slice(0, position)} ${str.slice(position, str.length)}`
}

