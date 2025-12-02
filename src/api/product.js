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

async function searchProduct(text) {
  try {
    const q = encodeURIComponent(text.trim());

    const filters = [
      `filters[$or][0][title][$containsi]=${q}`,
      `filters[$or][1][tags][$containsi]=${q}`,
      `filters[$or][2][characteristics][$containsi]=${q}`,
      "pagination[pageSize]=100",
      "populate=*",
    ].join("&");

    const url = `${ENV.API_URL}/${ENV.ENDPOINT.PRODUCTS}?${filters}`;

    const response = await fetch(url);

    if (!response || !response.ok) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const productCtrl = {
  getLastestPublished,
  search: searchProduct,
};
