export function Button(label: string, onclick: () => void) {
  const button = document.createElement("button");
  button.id = "loadButton";
  button.innerHTML = label;
  button.addEventListener("click", onclick);
  return button;
}
