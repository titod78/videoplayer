import { Config } from "../../config/config.js";
import { MediaPlayer } from "dashjs";
import { tpl } from "./videoPlayerTpl.js";

/**
 * Create the video using dash.js library
 * @return {void}
 */

function videoPlayer() {
  "use strict";

  let config;

  const init = () => {
    config = new Config();
    if (config.isSafari === false) {
      createVideoPlayer();
    } else {
      loadVideo();
    }
  };

  const getUrl = () => {
    let url = config.videoUrl;
    config.isSafari && (url = config.videoUrlSafari);
    return url;
  };

  /**
   * Creates video player
   * @return {Void}
   */
  const createVideoPlayer = () => {
    const player = MediaPlayer().create();
    loadVideo();
    player.initialize(document.querySelector("#videoPlayer"), getUrl(), true);
  };

  /**
   * Returns the component template
   * @return {HTMLelement}
   */
  const getTemplate = () =>
    tpl({
      isSafari: config.isSafari,
      url: getUrl()
    });

  /**
   * Loads video
   * @return {Void}
   */
  const loadVideo = () => (document.querySelector(".video-player-container").innerHTML = getTemplate());

  init();
}

export { videoPlayer };
