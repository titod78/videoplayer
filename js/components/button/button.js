/**
 * Creates a button component
 * @param {Object}  config  Configuration object
 * @return {Objet} [description]
 */

export class buttonGetMovieDetail {
  constructor(config) {
    this._config = config;
    this._element = null;
    this._selector = "." + this._config.templateData.className;
    this.init();
  }

  /**
   * Returns the component template
   * @return {HTMLelement}
   */
  getTemplate() {
    let className = this.config.templateData.className,
      label = this.config.templateData.label;

    return `<button class="btn ${className}" type="button"><span>${label}</span></button>`;
  }

  /**
   * Initialitze method
   * @return {void}
   */
  init() {
    this._element = this.getTemplate();
  }

  /**
   * Bind click event to component
   * @return {void}
   */
  bindEvent() {
    document.querySelector(this.selector).addEventListener("click", this.config.fn, false);
  }

  /**
   * Remove event click and remove component from DOM
   * @return {void}
   */
  remove() {
    const el = document.querySelector(this.selector);
    el.removeEventListener("click", this.config.fn, false);
    el.parentNode.removeChild(el);
  }

  get element() {
    return this._element;
  }

  get config() {
    return this._config;
  }

  get selector() {
    return this._selector;
  }
}
