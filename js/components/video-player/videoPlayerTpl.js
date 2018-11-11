export const tpl = video =>
  `<video id="videoPlayer" controls ${video.isSafari === true ? `src="${video.url}"` : ""}></video>`;
