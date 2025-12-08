import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El correo no tiene un formato válido")
      .required("El correo es obligatorio"),

    username: Yup.string().required("El nombre de usuario es obligatorio"),

    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(30, "La contraseña no puede tener más de 30 caracteres"),
    // .matches(/[A-Z]/, "Debe incluir al menos una mayúscula")
    // .matches(/[0-9]/, "Debe incluir al menos un número")

    repeatPassword: Yup.string()
      .required("Debes repetir la contraseña")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });
}
