export function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function uncapitalizeFirstLetter(val) {
  return String(val).charAt(0).toLowerCase() + String(val).slice(1);
}
