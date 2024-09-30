import { reactive } from "vue";

// alternatives
// const COLORS = [ "#40916C", "#52B788", "#74C69D", "#95D5B2", "#B7E4C7", "#D8F3DC", "#081C15", "#1B4332", "#2D6A4F"];
// const COLORS = ["#577590", "#43AA8B", "#90BE6D", "#F9C74F", "#F8961E", "#F3722C", "#F94144"];
// const COLORS = ["#0077b6", "#00b4d8", "#90e0ef", "#caf0f8", "#03045e"];
// const COLORS = [ "#0077B6FF", "#0096C7FF", "#00B4D8FF", "#48CAE4FF", "#90E0EFFF", "#ADE8F4FF", "#CAF0F8FF", "#03045EFF", "#023E8AFF",
// const COLORS = [ "#0077B6FF", "#00B4D8FF", "#90E0EFFF", "#40A578FF", "#9DDE8BFF", "#F8961EFF", "#F9C74FFF", "#E6FF94FF"];

const colors = reactive({
  text: null,
  muted: null,
  border: null,
  self: null,
  grid: null,
  price: null,
  background: null,
  palette: [
    "#03C1EFFF",
    "#FD6158FF",
    "#31AB4AFF",
    "#0AAFBFFF",
    "#FF922EFF",
    "#0F662DFF",
    "#0470D4FF",
    "#FFBD2FFF",
    "#77C93EFF",
    "#41517AFF",
    "#4E1D10FF",
    "#813504FF",
  ],
});

function updateCssColors() {
  const style = window.getComputedStyle(document.documentElement);
  colors.text = style.getPropertyValue("--evcc-default-text");
  colors.muted = style.getPropertyValue("--bs-gray-medium");
  colors.border = style.getPropertyValue("--bs-border-color-translucent");
  colors.self = style.getPropertyValue("--evcc-self");
  colors.grid = style.getPropertyValue("--evcc-grid");
  colors.price = style.getPropertyValue("--evcc-accent1");
  colors.background = style.getPropertyValue("--evcc-background");
}

// update colors on theme change
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateCssColors);
updateCssColors();

export const dimColor = (color) => {
  return color.toLowerCase().replace(/ff$/, "20");
};
export const fullColor = (color) => {
  return color.toLowerCase().replace(/20$/, "ff");
};

export default colors;
