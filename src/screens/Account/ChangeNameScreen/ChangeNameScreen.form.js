import * as Yup from "yup";

export function initialValues(firstname, lastname) {
  return {
    firstname: firstname || "",
    lastname: lastname || "",
  };
}

export function validationSchema() {
  return Yup.object({
    firstname: Yup.string().min(3, true).max(30, true).required(true),
    lastname: Yup.string().min(3, true).max(30, true).required(true),
  });
}
