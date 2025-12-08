import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    number: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string()
      .required("El nombre del titular es obligatorio")
      .min(6, "El nombre debe tener al menos 6 caracteres"),

    number: Yup.string()
      .required("El número de tarjeta es obligatorio")
      .matches(/^\d+$/, "El número de tarjeta solo puede contener números")
      .length(16, "La tarjeta debe tener 16 dígitos"),

    exp_month: Yup.string()
      .required("El mes es obligatorio")
      .matches(/^\d+$/, "Solo se permiten números")
      .length(2, "Formato inválido: usa 2 dígitos (ej. 05)")
      .test("valid-month", "El mes debe estar entre 01 y 12", (value) => {
        const month = Number(value);
        return month >= 1 && month <= 12;
      }),

    exp_year: Yup.string()
      .required("El año es obligatorio")
      .matches(/^\d+$/, "Solo se permiten números")
      .length(2, "Formato inválido: usa 2 dígitos (ej. 28)"),

    cvc: Yup.string()
      .required("El CVC es obligatorio")
      .matches(/^\d+$/, "Solo se permiten números")
      .length(3, "El CVC debe tener 3 dígitos"),
  });
}
