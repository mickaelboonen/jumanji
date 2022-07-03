export const toggleClass = (className) => {
  const listElement = document.querySelector(`.${className}`);
  listElement.classList.toggle(`${className}--closed`)
}
