import { authFetch } from "../lib";
import { ENV } from "../utils";

/**
 * Retrieve all addresses that belong to a specific user.
 */
async function getAllAddresses(userId) {
  try {
    // Build Strapi filter to get only the addresses where user.id === userId
    const filters = `filters[user][id][$eq]=${userId}`;

    // Build the full API request URL
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ADDRESSES}?${filters}`;

    // Perform authenticated request (includes token + expiration validation)
    const response = await authFetch(url);

    // ✅ CORRECT CHECK: use response.ok, NOT "response !== 200"
    if (!response || !response.ok) {
      // Try to read the error payload from Strapi
      let errorData = null;
      try {
        errorData = await response.json();
      } catch (_) {}

      console.error("Strapi addresses error:", errorData);
      throw new Error(errorData?.error?.message || "Error fetching addresses");
    }

    // ✅ If everything is OK, parse and return JSON
    const result = await response.json(); // Strapi returns { data: [...] }
    return result;
  } catch (error) {
    console.error("getAllAddresses error:", error);
    throw error;
  }
}

async function createAddress(userId, data) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ADDRESSES}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          ...data,
          user: userId,
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

async function getAddressById(addressId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ADDRESSES}/${addressId}`;

    const response = await authFetch(url);

    if (!response || !response.ok) throw response;

    const result = await response.json();

    return { ...result.data };
  } catch (error) {
    throw error;
  }
}

async function updateAddress(addressId, data) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ADDRESSES}/${addressId}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    };

    const response = await authFetch(url, params);

    if (!response || !response.ok) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function deleteAddress(addressId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.ADDRESSES}/${addressId}`;
    console.log(url);

    const params = {
      method: "DELETE",
    };

    const response = await authFetch(url, params);

    // Si no hay respuesta o viene con error, lanzamos excepción
    if (!response || !response.ok) throw response;

    // 👇 Strapi devuelve 204 cuando borra algo sin body
    if (response.status === 204) {
      // No intentes hacer response.json() aquí, no hay body
      return { ok: true };
    }

    // Si en algún caso Strapi devuelve datos en el body:
    const result = await response.json();
    return { ...result.data };
  } catch (error) {
    throw error;
  }
}

export const addressCtrl = {
  getAll: getAllAddresses,
  get: getAddressById,
  create: createAddress,
  update: updateAddress,
  delete: deleteAddress,
};
