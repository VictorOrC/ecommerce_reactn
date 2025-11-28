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

export const addressCtrl = {
  getAll: getAllAddresses,
};
