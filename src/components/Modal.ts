// import "../style/modal.css";

export function Modal(content: HTMLElement) {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.setAttribute("role", "dialog");
  modalOverlay.setAttribute("aria-modal", "true");
  modalOverlay.setAttribute("aria-hidden", "true");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.appendChild(content);
  modalOverlay.appendChild(modalContent);
  function open() {
    modalOverlay.style.visibility = "visible";
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.appendChild(modalOverlay);
    document.addEventListener("keydown", handleScapeClose);
  }

  function close() {
    modalOverlay.style.visibility = "hidden";
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.removeChild(modalOverlay);
    document.removeEventListener("keydown", handleScapeClose);
  }

  function handleScapeClose(event: KeyboardEvent) {
    if (event.key === "Escape") {
      close();
    }
  }

  modalOverlay.addEventListener("click", close);
  modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  return { modalOverlay, open, close };
}
