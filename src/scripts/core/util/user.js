import $ from 'jquery';
import Cookies from 'js-cookie';

const prefix = '_ztheme_';

const cookies = {
  siteVisit: {
    name: 'site_visit',
    value: true
  },
  announcementBar: {
    name: 'announcementBar',
    value: true
  }
};

/**
 * Creates and returns a copy of one of the cookies available above
 *
 * @param {String} key
 * @return {Object | undefined}
 */
export function generateCookie(key) {
  let c = {};

  if (Object.prototype.hasOwnProperty.call(cookies, key)) {
    c = $.extend(true, {}, cookies[key]);
    c.name = prefix + c.name;
  } else {
    console.warn(`[User] - Cannot create cookie.  Key ${key} not found.`);
  }

  return c;
}

/**
 * Checks for the presence of a browser cookie by name (doesn't check for value equality)
 *
 * @param {String} cookieName
 * @return {boolean}
 */
export function hasCookie(cookieName) {
  return typeof Cookies.get(cookieName) !== 'undefined';
}

/**
 * Returns value of browser cookie by name
 *
 * @param {String} cookieName
 * @return {String | Undefined}
 */
export function getCookieValue(cookieName) {
  return hasCookie(cookieName) ? Cookies.get(cookieName) : undefined;
}

/**
 * Removes a cookie by name
 *
 * @param {String} cookieName
 */
export function removeCookie(cookieName) {
  Cookies.remove(cookieName);
}

/**
 * Sets a browser cookie
 *
 * @param {Object} cookie
 * @param {String} cookie.name
 * @param {String} cookie.value
 * @param {Number} cookie.expiration - Time to expire in days, expires after session if left blank
 */
export function setCookie(cookie) {
  if (hasCookie(cookie.name) && getCookieValue(cookie.name) !== cookie.value) {
    removeCookie(cookie.name);
  }

  const opts = Object.prototype.hasOwnProperty.call(cookies, 'expiration') ? { expires: cookie.expiration } : {};
  Cookies.set(cookie.name, cookie.value, opts);
}

export function typeWriter($element, speed = 100, iteration = 0) {
  const message = $element.data('message');

  if (iteration === message.length)
    return true;

  setTimeout(function() {
    $element.html($element.html() + message[iteration++]);

    typeWriter($element, 100, iteration);
  }, speed);
}
