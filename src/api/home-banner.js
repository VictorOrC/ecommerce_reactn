import { ENV } from "../utils";

async function getAllBanners() {
  try {
    const sort = "sort=position:asc";
    const populate = "populate=*";
    const filters = `${sort}&${populate}`;
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.HOME_BANNERS}?${filters}`;

    const response = await fetch(url);

    if (!response || !response.ok) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const homeBannerCtrl = {
  getAll: getAllBanners,
};
