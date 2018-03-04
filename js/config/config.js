export class Config {

  constructor() {
    this._lang = 'en';
    this._movieDetailUrl = 'https://api.themoviedb.org/3/movie/9761-elephants-dream?api_key=219c9d47e90e5df6fb877db3f2d873cf&language=';
    this._videoUrl = 'http://media.axprod.net/dash/ED_TTML_NEW/Clear/Manifest_sub_in.mpd';
    this._videoUrlSafari = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
    this._selectLanguageTemplateData = {
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
    };
    this._buttonTemplateData = {
      className: 'movie-detail-button',
      label: 'Get movie detail'
    };
  }

  get lang() {
    return this._lang;
  }

  get movieDetailUrl() {
    return this._movieDetailUrl;
  }

  get isSafari() {
    return /Safari/.test( navigator.userAgent ) && /Apple Computer/.test( navigator.vendor );
  }

  get videoUrl() {
    return this._videoUrl;
  }

  get videoUrlSafari() {
    return this._videoUrlSafari;
  }

  get selectLanguageTemplateData() {
    return this._selectLanguageTemplateData;
  }

  get buttonTemplateData() {
    return this._buttonTemplateData;
  }

};