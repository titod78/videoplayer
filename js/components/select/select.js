/**
 * Creates a button component
 * @param {Object}  config  Configuration object
 * @return {Objet} Button component
 */

import { tpl } from "./selectTpl.js";

function selectLanguage(config) {
  "use strict";

  let element;

  /**
   * Selector of the button
   * @type {String}
   */
  const selector = `.${config.templateData.className}`,
    /**
     * Initialitze method
     * @return {void}
     */
    init = () => (element = getTemplate()),
    /**
     * Returns the component template
     * @return {HTMLelement}
     */
    getTemplate = () => tpl(config.templateData),
    /**
     * Onchange's callback
     * @return {Void}
     */
    changeCallback = function() {
      const selected = this.options[this.selectedIndex],
        value = selected.value,
        dir = selected.getAttribute("data-dir");

      config.fn(value, dir);
    },
    /**
     * Bind click event to component
     * @return {void}
     */
    bindEvent = () => document.querySelector(selector).addEventListener("change", changeCallback, false);

  init();

  /**
   * Public API
   */
  return {
    element,
    bindEvent
  };
}

export { selectLanguage };
