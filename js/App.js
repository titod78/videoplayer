/**
 * Controller for video player
 * From this controller is instanciated the movie information card component
 */

import { Config } from "./config/config.js";

/**
 * Select component for language selection
 * @type {Class}
 */
import { selectLanguage } from "./components/select/select.js";
/**
 * Button component for request movie detail
 * @type {Class}
 */
import { buttonGetMovieDetail } from "./components/button/button.js";

/**
 * Class to make a request to service of the movie information
 * @type {Class}
 */
import { movieDetailService } from "./services/movieDetail.js";

/**
 * Component of the movie information
 * @type {Class}
 */
import { movieDetailCard } from "./components/movie-detail-card/movieDetailCard.js";

(function() {
  "use strict";

  /**
   * Keeps select component instance
   */
  let select = null;

  /**
   * Keeps button component instance
   */
  let button = null;

  /**
   * Default language
   * @type {String}
   */
  let languageSelected;

  let config;

  /**
   * Initialitze method
   * @return {void}
   */
  const init = () => {
    config = new Config();
    languageSelected = config.lang;
    loadSelectLanguage();
    addSelectLanguage();
    loadButton();
    addButton();
  };

  /**
   * Returns configuration data for select component
   * @return {Object}
   */
  const getSelectLanguageConfig = () => ({
    templateData: config.selectLanguageTemplateData,
    fn: setLanguage
  });

  /**
   * Load Movie detail component
   * @param  {Object} data Configuration data
   * @return {Void}
   */
  const loadMovieDetailCard = data => {
    new movieDetailCard(data);
    if (button !== null) {
      button.remove();
      button = null;
    }
  };

  /**
   * Requests the movie detail information
   * @return {void}
   */
  const loadMovieDetail = lang => {
    const movieDetail = new movieDetailService(),
      language = typeof lang === "string" ? lang : languageSelected;

    movieDetail.getMovieDetail(loadMovieDetailCard, language);
  };

  /**
   * Load select component
   * @return {Void}
   */
  const loadSelectLanguage = () => (select = new selectLanguage(getSelectLanguageConfig()));

  /**
   * Add select component to container
   * @return {Void}
   */
  const addSelectLanguage = () => {
    document.querySelector(".styled-select").innerHTML = select.element;
    select.bindEvent();
  };

  /**
   * Callback for select language select
   * @param {String} Selected language
   * @param {String} Text direction
   * @return {Void}
   */
  const setLanguage = (lang, dir) => {
    languageSelected = lang;
    setDir(dir);
    button === null && loadMovieDetail(lang);
  };

  /**
   * Sets de document direction
   * @param  {String} dir direction
   * @return {Void}
   */
  const setDir = dir => (document.dir = dir);

  /**
   * Returns configuration data for button component
   * @return {Object}
   */
  const getButtonData = () => ({
    templateData: config.buttonTemplateData,
    fn: loadMovieDetail
  });

  /**
   * Load button component
   * @return {Void}
   */
  const loadButton = () => (button = new buttonGetMovieDetail(getButtonData()));

  /**
   * Add button component to container
   * @return {Void}
   */
  const addButton = () => {
    document.querySelector(".button-information-movie-container").innerHTML = button.element;
    button.bindEvent();
  };

  init();
})();
