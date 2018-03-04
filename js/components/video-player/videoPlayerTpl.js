export const tpl = ( video ) => {
  return `
  <video id="videoPlayer" controls ${video.isSafari === true ? `src="${video.url}"`  : ''}></video>
  `;
};