import { list } from '../../services/hotels.js';
import { template } from './hotelListTemplate.js';
import { hotelDetail } from '../hotel-detail/detail.js';

function HotelList( mainContainer ) {
  'use strict';

  let hotelList,
    container = mainContainer;

  function init() {
    createHotelList();
  }

  function createHotelList() {
    const hotels = Object.values( list() );
    hotelList = template( hotels );
  }

  function loadHotelList() {
    container.insertAdjacentHTML( 'afterbegin', hotelList );
    bindEvents();
  }

  function bindEvents() {
    var elements = document.querySelectorAll( '[data-hotel-id]' );
    elements.forEach( function ( el ) {
      el.addEventListener( 'click', getHotelDeatil );
    } );
  }

  function getHotelDeatil() {
    let hotelId = this.getAttribute( 'data-hotel-id' );
    hotelDetail( hotelId, container );
  }

  init();

  return {
    loadHotelList: loadHotelList
  };

}

export { HotelList };