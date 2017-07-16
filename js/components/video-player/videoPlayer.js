/**
 * Create the video using dash.js library
 * @return {void}
 */

var dashjs = require( 'dashjs' );
var tpl = require( './videoPlayer.html' );

module.exports = function () {
  'use strict';

  var init = function () {
    if ( isSafari() === false ) {
      createVideoPlayer();
    } else {
      loadVideo();
    }
  };

  /**
   * Returns if the browser is Safari or not
   * @return {Boolean}
   */
  var isSafari = function () {
    return /Safari/.test( navigator.userAgent ) && /Apple Computer/.test( navigator.vendor );
  };

  var getUrl = function () {
    var url = 'http://media.axprod.net/dash/ED_TTML_NEW/Clear/Manifest_sub_in.mpd';
    if ( isSafari() ) {
      url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
    }
    return url;
  };

  /**
   * Creates video player
   * @return {Void}
   */
  var createVideoPlayer = function () {
    var player = dashjs.MediaPlayer().create();

    loadVideo();
    player.initialize( document.querySelector( '#videoPlayer' ), getUrl(), true );
  };

  /**
   * Returns the component template
   * @return {HTMLelement}
   */
  var getTemplate = function () {
    var data = {
        isSafari: isSafari(),
        url: getUrl()
      },
      _tpl = _.template( tpl.videoTemplate( data ) );
    return _tpl();
  };

  /**
   * Loads video
   * @return {Void}
   */
  var loadVideo = function () {
    document.querySelector( '.video-player-container' ).innerHTML = getTemplate();
  };

  init();

};
