/**
 * Create the video using dash.js library
 * @return {void}
 */

import { MediaPlayer } from 'dashjs';
import { tpl } from './videoPlayerTpl.js';

function videoPlayer() {
  'use strict';

  const init = function () {
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
  const isSafari = function () {
    return /Safari/.test( navigator.userAgent ) && /Apple Computer/.test( navigator.vendor );
  };

  const getUrl = function () {
    let url = 'http://media.axprod.net/dash/ED_TTML_NEW/Clear/Manifest_sub_in.mpd';
    if ( isSafari() ) {
      url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
    }
    return url;
  };

  /**
   * Creates video player
   * @return {Void}
   */
  const createVideoPlayer = function () {
    const player = dashjs.MediaPlayer().create();

    loadVideo();
    player.initialize( document.querySelector( '#videoPlayer' ), getUrl(), true );
  };

  /**
   * Returns the component template
   * @return {HTMLelement}
   */
  const getTemplate = function () {
    const data = {
      isSafari: isSafari(),
      url: getUrl()
    };

    return tpl( data );
  };

  /**
   * Loads video
   * @return {Void}
   */
  const loadVideo = function () {
    document.querySelector( '.video-player-container' ).innerHTML = getTemplate();
  };

  init();

};

export { videoPlayer };