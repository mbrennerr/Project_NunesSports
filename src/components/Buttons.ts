export function Button(onclick: () => void) {
  const button = document.createElement("button");
  button.id = "loadButton";
  button.innerHTML = "Load Products";
  button.addEventListener("click", onclick);
  return button;
}
