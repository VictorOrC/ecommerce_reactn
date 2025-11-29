import { ENV } from "../utils";

async function getLastestPublished(limite = 20) {
  try {
    const sort = "sort=publishedAt:desc";
    const pagination = `pagination[limit]=${limite}`;
    const populate = "populate=*";
    const filters = `${sort}&${pagination}&${populate}`;

    const url = `${ENV.API_URL}/${ENV.ENDPOINT.PRODUCTS}?${filters}`;
    console.log(url);

    const response = await fetch(url);

    if (!response || !response.ok) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const productCtrl = {
  getLastestPublished,
};
