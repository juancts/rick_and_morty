const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = new RegExp(
  "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{8,15}/"
);
/* 
PASSWORD:
Minimo 8 caracteres
Maximo 15
Al menos una letra mayúscula
Al menos una letra minucula
Al menos un dígito
No espacios en blanco
Al menos 1 caracter especial */

export default function validate(inputs) {
  const errors = {};
  if (!regexEmail.test(inputs.username)) {
    errors.username = "usuario incorrecto";
  }
  if (!inputs.username) {
    errors.username = "ingrese usuario";
  }
  if (inputs.username.length > 35) {
    errors.username = "Max length 35";
  }
  if (!regexPass.test(inputs.password)) {
    errors.password = "Minimo 8 caracteres";
  }
}
