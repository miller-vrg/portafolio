import { messageError, tipoError } from "../util/dataError.js";


export const valida = (input) => {
    const tipoInput = input.dataset.tipo;
    const spanMessage = input.parentElement.querySelector(".input-container-error");

  if (input.validity.valid) {
    input.classList.remove("input-error");
    spanMessage.innerHTML = "Todo esta bien.";
  } else {
    input.classList.add("input-error");
    viewMessageError(tipoInput, input,spanMessage);
  }
};

const viewMessageError = (tipoInput, input,spanMessage) => {
  tipoError.forEach((error) => {
    if (input.validity[error]) {
      const message = messageError[tipoInput][error];
      spanMessage.innerHTML = message;
    }
  });
};
