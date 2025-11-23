import { jwtDecode } from "jwt-decode";

export function hasTokenExpired(token) {
  const tokenDecode = jwtDecode(token);
  const expiredDate = tokenDecode.exp * 1000;
  const currentDay = new Date().getTime();

  if (currentDay > expiredDate) {
    return true;
  }

  return false;
}
