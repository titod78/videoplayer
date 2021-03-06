export const tpl = movieDetail =>
  `<div class='card'>
    <div class='card_left'>
      <img src='${movieDetail.posterUrl}'>
    </div>
    <div class='card_right'>
      <h1>${movieDetail.original_title}</h1>
      <div class='card_right__details'>
        <ul>
          <li>
            ${movieDetail.year}
          </li>
            ${movieDetail.runtime !== null ? `<li>${movieDetail.runtimeFormat}</li>` : ""}
          <li>
            ${movieDetail.genre}
          </li>
        </ul>
        <div class='card_right__review'>
          <p>
            ${movieDetail.overview}
          </p>
          ${movieDetail.homepage !== null ? `<a href="${movieDetail.homepage}" target="_blank">Read more</a>` : ""}
        </div>
        <div class='card_right__button'>
          <a target='_blank'>WATCH TRAILER</a>
        </div>
      </div>
    </div>
  </div>
`;
