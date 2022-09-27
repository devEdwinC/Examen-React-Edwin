export const validationsForm = (form) => {
  let errors = {};
  let regexUser = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (form.email) {
    if (!form.email.trim()) {
      errors.email = "El campo 'Correo' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Correo' es incorrecto";
    }
  }

  if (form.user) {
    if (!form.user.trim()) {
      errors.user = "El campo 'Usuario' es requerido";
    } else if (!regexUser.test(form.user.trim())) {
      errors.user = "El campo 'Usuario' no es válido";
    }
  }

  if (form.password) {
    if (!form.password.trim()) {
      errors.password = "El campo 'Contraseña' es requerido";
    } else if (!regexPassword.test(form.password.trim())) {
      errors.password = "El campo 'Contraseña' debe contener al menos una minúscula, una mayúscula y un número";
    }
  }

  if (form.confirmPassword) {
    if (!form.confirmPassword.trim()) {
      errors.confirmPassword = "El campo 'Confirmar contraseña' es requerido";
    } else if (form.confirmPassword !== form.password) {
      errors.confirmPassword = "No coincide con la contraseña escrita";
    }
  }

  if (form.name) {
    if (!form.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }
  }

  if (form.signer) {
    if (!form.signer.trim()) {
      errors.signer = "El campo 'Firmante' es requerido";
    } else if (!regexName.test(form.signer.trim())) {
      errors.signer = "El campo 'Firmante' sólo acepta letras y espacios en blanco";
    }
  }

  return errors;
};

export default validationsForm;
