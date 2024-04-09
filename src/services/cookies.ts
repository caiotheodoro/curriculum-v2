import {  parseCookies } from 'nookies';



function setCookie(ctx: any, key: string, value: string, options?: any) {
  setCookie(ctx, key, value, options);
}

function getCookies (ctx: any) {
  return parseCookies(ctx);
}

function getCookie (ctx: any, key: string) {
  const cookies = getCookies(ctx);

  return cookies[key];
}

function getCookieFromBrowser (key: string) {
  return parseCookies()[key];
}

function setCookieFromBrowser (key: string, value: string) {
  document.cookie = `${key}=${value}`;
}

const CookieService = {
  getCookies,
  setCookie,
  getCookie,
  getCookieFromBrowser,
  setCookieFromBrowser
};

export default CookieService;
