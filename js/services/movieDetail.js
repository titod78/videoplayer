import { Config } from "../config/config.js";

/**
 * Send request to service for obtains the movie information
 * @return {Class}
 */

export function movieDetailService() {
  "use strict";

  const config = new Config();

  /**
   * Sends request to get movie detail data
   * @param  {Function} success Callback for success response
   * @return {Void}
   */
  function fetchMovieDetail(success, language) {
    const lang = language || config.lang,
      url = config.movieDetailUrl + lang;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSessionStorage(language, data);
        return success(data);
      })
      .catch(error => console.error("Something went wrong", error));
  }

  /**
   * Save data in session storage
   * @param {String} language Selected language
   * @param {Object} data     Movie data
   */
  function setSessionStorage(language, data) {
    const existingData = getSessionStorage();
    let cacheData = {};

    cacheData[language] = data;
    existingData !== null && Object.assign(cacheData, existingData);
    window && window.sessionStorage.setItem("movieDetail", JSON.stringify(cacheData));
  }

  /**
   * Returns cached data
   * @param  {String} language Selected language
   * @return {Object}
   */
  function getCachedData(language) {
    const data = getSessionStorage();
    if (data !== null && typeof data[language] !== "undefined") {
      return data[language];
    }
    return null;
  }

  /**
   * Returns movie detail data
   * @param {Function} success  callback
   * @param {String}   language Selected language
   * @return {Void}
   */
  function getMovieDetail(success, language) {
    const movieDetail = getCachedData(language);
    if (movieDetail === null) {
      fetchMovieDetail(success, language);
    } else {
      success(movieDetail);
    }
  }

  /**
   * Returns data in session storage
   * @return {Object}
   */
  function getSessionStorage() {
    return JSON.parse(window.sessionStorage.getItem("movieDetail"));
  }

  /**
   * Public API
   */
  return {
    getMovieDetail: getMovieDetail
  };
}
