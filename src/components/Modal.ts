export function Modal(content: HTMLElement) {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.appendChild(content);
  modalOverlay.appendChild(modalContent);
  function open() {
    modalOverlay.style.visibility = "visible";
  }

  function close() {
    modalOverlay.style.visibility = "hidden";
  }

  modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  return { modalOverlay, open, close };
}
