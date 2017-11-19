import { detail } from '../../services/hotels.js';
import { template } from './detailTemplate.js';

/**
 * Class hotelDetail
 * @param  {String} id Hotel identifier
 * @return {Void}
 */
function hotelDetail( id ) {
  'use strict';

  const detailData = detail( id ),
    container = document.body;

  /**
   * Initialitze method. Add hotel detail component to container
   * @return {Void}
   */
  function init() {
    let tpl = template( detailData ),
      previousDetailContainer = container.querySelector( '.hotel-detail' );

    if ( previousDetailContainer !== null ) {
      container.removeChild( previousDetailContainer );
    }
    container.insertAdjacentHTML( 'beforeend', tpl );
  }

  init();

}

export { hotelDetail };