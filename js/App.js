/**
 * Controller for video player
 * From this controller is instanciated the movie information card component
 */

/**
 * Select component for language selection
 * @type {Class}
 */
import { selectLanguage } from './components/select/select.js';
/**
 * Button component for request movie detail
 * @type {Class}
 */
import { buttonGetMovieDetail } from './components/button/button.js';

/**
 * Class to make a request to service of the movie information
 * @type {Class}
 */
import { movieDetailService } from './services/movieDetail.js';

/**
 * Component of the movie information
 * @type {Class}
 */
import { movieDetailCard } from './components/movie-detail-card/movieDetailCard.js';

( function () {
  'use strict';

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
  let languageSelected = 'en';

  /**
   * Initialitze method
   * @return {void}
   */
  const init = function () {
    loadSelectLanguage();
    addSelectLanguage();
    loadButton();
    addButton();
  };

  /**
   * Returns configuration data for select component
   * @return {Object}
   */
  const getSelectLanguageData = function () {
    return {
      templateData: {
        languages: [ {
          value: 'en',
          name: 'English',
          dir: 'ltr'
        }, {
          value: 'ar',
          name: 'Arabic',
          dir: 'rtl'
        } ],
        className: 'select-language',
        label: 'Select language'
      },
      fn: function ( lang, dir ) {
        languageSelected = lang;
        setDir( dir );
        if ( button === null ) {
          loadMovieDetail( lang );
        }
      }
    };
  };

  /**
   * Load Movie detail component
   * @param  {Object} data Configuration data
   * @return {Void}
   */
  const loadMovieDetailCard = function ( data ) {
    new movieDetailCard( data );
    if ( button !== null ) {
      button.remove();
      button = null;
    }
  };

  /**
   * Requests the movie detail information
   * @return {void}
   */
  const loadMovieDetail = function ( lang ) {
    const movieDetail = new movieDetailService(),
      language = ( typeof lang === 'string' ) ? lang : languageSelected;

    movieDetail.getMovieDetail( loadMovieDetailCard, language );
  };

  /**
   * Load select component
   * @return {Void}
   */
  const loadSelectLanguage = function () {
    select = new selectLanguage( getSelectLanguageData() );
  };

  /**
   * Add select component to container
   * @return {Void}
   */
  const addSelectLanguage = function () {
    document.querySelector( '.styled-select' )
      .innerHTML = select.element;
    select.bindEvent();
  };

  /**
   * Sets de document direction
   * @param  {String} dir direction
   * @return {Void}
   */
  const setDir = function ( dir ) {
    document.dir = dir;
  };

  /**
   * Returns configuration data for button component
   * @return {Object}
   */
  const getButtonData = function () {
    return {
      templateData: {
        className: 'movie-detail-button',
        label: 'Get movie detail'
      },
      fn: loadMovieDetail
    };
  };

  /**
   * Load button component
   * @return {Void}
   */
  const loadButton = function () {
    button = new buttonGetMovieDetail( getButtonData() )
  };

  /**
   * Add button component to container
   * @return {Void}
   */
  const addButton = function () {
    document.querySelector( '.button-information-movie-container' )
      .innerHTML = button.element;
    button.bindEvent();
  };

  init();

} )();