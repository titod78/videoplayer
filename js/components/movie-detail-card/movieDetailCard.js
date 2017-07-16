/**
 * Creates a movie detail card component
 * @param {Object}  data  Data object with movie information
 * @return {void}
 */

var tpl = require( './movieDetailCard.html' );
var videoPlayer = require( '../video-player/videoPlayer.js' );

module.exports = function ( data ) {
  'use strict';

  var genre = getGenres(),
    year = getYear(),
    posterUrl = getPosterUrl(),
    runTime = getRuntime();

  /**
   * Initialitze method
   * @return {void}
   */
  function init() {
    addMovieInformation();
    bindEvent();
  }

  /**
   * Returns template
   * @return {Function}
   */
  function getTemplate() {
    var allData = _.extend( data, genre, year, posterUrl, runTime );
    return _.template( tpl.movieDetailCardTemplate( allData ) );
  }

  /**
   * Adds movie information template to container
   */
  function addMovieInformation() {
    var content = getTemplate();
    document.querySelector( '.movie-information' ).innerHTML = content();
  }

  /**
   * Bind click event to button for load de video player
   * @return {void}
   */
  function bindEvent() {
    var selector = '.card_right__button a',
      el = document.querySelector( selector );
    el.addEventListener( 'click', loadVideoPlayer, false );
  }

  /**
   * Loads a video player component
   * @param  {Object} e Event object
   * @return {Void}
   */
  function loadVideoPlayer( e ) {
    e.preventDefault();
    new videoPlayer();
  }

  /**
   * Returns genres for movie
   * @return {Object}
   */
  function getGenres() {
    return {
      genre: data.genres.map( function ( gen ) {
        return ' ' + gen.name;
      } )
    };
  }

  /**
   * Returns year of release
   * @return {Object}
   */
  function getYear() {
    var parsedDate = new Date( data.release_date );
    return {
      year: parsedDate.getFullYear()
    };
  }

  /**
   * Returns image url
   * @return {Object}
   */
  function getPosterUrl() {
    return {
      posterUrl: 'https://image.tmdb.org/t/p/w342' + data.poster_path
    };
  }

  /**
   * Returns formatted runtime
   * @return {Object}
   */
  function getRuntime() {
    var runtime = data.runtime,
      hours = Math.floor( runtime / 3600 ),
      minutes = runtime - ( hours * 3600 );

    if ( hours < 10 ) {
      hours = '0' + hours;
    }
    if ( minutes < 10 ) {
      minutes = '0' + minutes;
    }

    return {
      runtimeFormat: hours + ':' + minutes
    };
  }

  init();

};
