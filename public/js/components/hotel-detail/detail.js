import { detail } from '../../services/hotels.js';
import { template } from './detailTemplate.js';

function hotelDetail( id, mainContainer ) {
  'use strict';

  const detailData = detail( id ),
    container = mainContainer;

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