import * as Yup from "yup";

export function initialValues(username) {
  return {
    username,
  };
}

export function validationSchema() {
  return Yup.object({
    username: Yup.string().min(4, true).max(20, true).required(true),
  });
}
