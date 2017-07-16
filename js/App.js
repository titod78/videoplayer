/**
 * Controller for video player
 * From this controller is instanciated the movie information card component
 */

/**
 * Select component for language selectionl
 * @type {Class}
 */
var selectLanguage = require( './components/select/select.js' );
/**
 * Button component for request movie detail
 * @type {Class}
 */
var buttonGetMovieDetail = require( './components/button/button.js' );

/**
 * Class to make a request to service of the movie information
 * @type {Class}
 */
var movieDetailService = require( './services/movieDetail.js' );

/**
 * Component of the movie information
 * @type {Class}
 */
var movieDetailCard = require( './components/movie-detail-card/movieDetailCard.js' );

( function () {
  'use strict';

  /**
   * Keeps select component instance
   */
  var select = null;

  /**
   * Keeps button component instance
   */
  var button = null;

  /**
   * Default language
   * @type {String}
   */
  var languageSelected = 'en';

  /**
   * Initialitze method
   * @return {void}
   */
  var init = function () {
    loadSelectLanguage();
    addSelectLanguage();
    loadButton();
    addButton();
  };

  /**
   * Returns configuration data for select component
   * @return {Object}
   */
  var getSelectLanguageData = function () {
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
  var loadMovieDetailCard = function ( data ) {
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
  var loadMovieDetail = function ( lang ) {
    var movieDetail = new movieDetailService(),
      language = ( typeof lang === 'string' ) ? lang : languageSelected;

    movieDetail.getMovieDetail( loadMovieDetailCard, language );
  };

  /**
   * Load select component
   * @return {Void}
   */
  var loadSelectLanguage = function () {
    select = new selectLanguage( getSelectLanguageData() );
  };

  /**
   * Add select component to container
   * @return {Void}
   */
  var addSelectLanguage = function () {
    document.querySelector( '.styled-select' )
      .innerHTML = select.element;
    select.bindEvent();
  };

  /**
   * Sets de document direction
   * @param  {String} dir direction
   * @return {Void}
   */
  var setDir = function ( dir ) {
    document.dir = dir;
  };

  /**
   * Returns configuration data for button component
   * @return {Object}
   */
  var getButtonData = function () {
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
  var loadButton = function () {
    button = new buttonGetMovieDetail( getButtonData() );
  };

  /**
   * Add button component to container
   * @return {Void}
   */
  var addButton = function () {
    document.querySelector( '.button-information-movie-container' )
      .innerHTML = button.element;
    button.bindEvent();
  };

  init();

} )();
