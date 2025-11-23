import { ENV } from "../utils";

async function getMe() {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.USERS_ME}`;
    const params = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzYzODgzNDIzLCJleHAiOjE3NjY0NzU0MjN9.5XqOSKJTmBAvGzNLkyE5n3DrsmX96W9SLw57PtF9i20",
      },
    };

    const response = await fetch(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const userCtrl = {
  getMe,
};
