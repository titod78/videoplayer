import { Config } from '../../config/config.js';

/**
 * Create the video using dash.js library
 * @return {void}
 */

import { MediaPlayer } from 'dashjs';
import { tpl } from './videoPlayerTpl.js';

function videoPlayer() {
  'use strict';

  let config;

  const init = function () {
    config = new Config();
    if ( config.isSafari === false ) {
      createVideoPlayer();
    } else {
      loadVideo();
    }
  };

  const getUrl = function () {
    let url = config.videoUrl;
    if ( config.isSafari ) {
      url = config.videoUrlSafari;
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
      isSafari: config.isSafari,
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