import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required(true).min(8, true).max(30, true),
    repeatPassword: Yup.string()
      .required(true)
      .min(8, true)
      .max(30, true)
      .oneOf([Yup.ref("password")], true),
  });
}
