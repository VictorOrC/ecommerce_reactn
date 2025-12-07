// api/order.js
import { authFetch } from "../lib";
import { ENV } from "../utils";

async function payment(
  idPayment,
  userId,
  totalPayment,
  products,
  addressShipping
) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ORDERS}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // si tu Strapi está en v4 normalmente espera { data: {...} }
      body: JSON.stringify({
        data: {
          idPayment,
          user: userId,
          totalPayment,
          products,
          addressShipping,
        },
      }),
    };

    const response = await authFetch(url, params);

    if (!response || !response.ok) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function getAll(userId) {
  try {
    const userFilter = `filters[user][id][$eq]=${userId}`;
    const sortFilter = "sort[0]=createdAt:desc";
    const filters = `${userFilter}&${sortFilter}`;

    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ORDERS}?${filters}`;

    const response = await authFetch(url);

    if (!response || !response.ok) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function gerOrderById(orderId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ORDERS}/${orderId}`;

    const response = await authFetch(url);

    if (!response || !response.ok) throw response;

    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export const orderCtrl = {
  payment,
  getAll,
  getById: gerOrderById,
};
