import { ENV } from "../utils";

async function register(email, username, password) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINT.REGISTER}`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password }),
  };

  const response = await fetch(url, params);

  // 👇 SIEMPRE leer el body ANTES de checkear ok
  const result = await response.json();

  if (!response.ok) {
    // 🔥 Lanzamos el JSON de error, NO el response
    throw result;
  }

  return result;
}

async function login(email, password) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.LOGIN}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const authCtrl = {
  register,
  login,
};
