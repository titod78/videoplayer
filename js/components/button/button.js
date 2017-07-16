/**
 * Creates a button component
 * @param {Object}  config  Configuration object
 * @return {Objet} [description]
 */

module.exports = function ( config ) {
  'use strict';

  var element,

    /**
     * Selector of the button
     * @type {String}
     */
    selector = '.' + config.templateData.className,

    /**
     * Initialitze method
     * @return {void}
     */
    init = function () {
      element = getTemplate();
    },

    /**
     * Returns the component template
     * @return {HTMLelement}
     */
    getTemplate = function () {
      var tpl = _.template( '<button class="btn <%= className %>" type="button"><span><%= label %></span></button>' );
      return tpl( config.templateData );
    },

    /**
     * Bind click event to component
     * @return {void}
     */
    bindEvent = function () {
      document
        .querySelector( selector )
        .addEventListener( 'click', config.fn, false );
    },

    /**
     * Remove event click and remove component from DOM
     * @return {void}
     */
    remove = function () {
      var el = document.querySelector( selector );
      el.removeEventListener( 'click', config.fn, false );
      el.parentNode.removeChild( el );
    };

  init();

  /**
   * Public API
   */
  return {
    element: element,
    bindEvent: bindEvent,
    remove: remove
  };
};
