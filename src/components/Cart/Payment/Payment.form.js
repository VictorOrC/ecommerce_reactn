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
    name: Yup.string().min(6, true).required(true),
    number: Yup.string().required(true).min(16, true).max(16, true),
    exp_month: Yup.string().required(true).min(2, true).max(2, true),
    exp_year: Yup.string().required(true).min(2, true).max(2, true),
    cvc: Yup.string().required(true).min(3, true).max(3, true),
  });
}
