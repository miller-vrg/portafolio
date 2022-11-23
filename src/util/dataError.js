export const messageError = {
    nombre: {
      valueMissing: "Cadena muy corta o campo vacio.",
      patternMismatch: `Ni numeros, ni simbolos.`,
    },
    email: {
      valueMissing: "Cadena muy corta o campo vacio.",
      typeMismatch: "El correo no es valido.",
    },
    asunto:{
      valueMissing: "Cadena muy corta o campo vacio.",
    }
  };

  export const tipoError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooShort",
  ];