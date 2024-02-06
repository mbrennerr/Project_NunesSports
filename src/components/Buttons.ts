export function Button(onclick: () => void) {
  const button = document.createElement("button");
  button.id = "loadButton";
  button.innerHTML = "Novo Produto";
  button.addEventListener("click", onclick);
  return button;
}
