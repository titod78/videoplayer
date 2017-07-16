/**
 * Creates a button component
 * @param {Object}  config  Configuration object
 * @return {Objet} [description]
 */

var tpl = require( './select.html' );

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
      var _tpl = _.template( tpl.selectTemplate( config.templateData ) );
      return _tpl();
    },

    /**
     * Onchange's callback
     * @return {Void}
     */
    changeCallback = function () {
      var selected = this.options[ this.selectedIndex ],
        value = selected.value,
        dir = selected.getAttribute( 'data-dir' );

      config.fn( value, dir );
    },

    /**
     * Bind click event to component
     * @return {void}
     */
    bindEvent = function () {
      document
        .querySelector( selector )
        .addEventListener( 'change', changeCallback, false );
    };

  init();

  /**
   * Public API
   */
  return {
    element: element,
    bindEvent: bindEvent
  };
};
