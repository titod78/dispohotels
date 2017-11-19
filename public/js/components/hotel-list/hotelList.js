import { list } from '../../services/hotels.js';
import { template } from './hotelListTemplate.js';
import { hotelDetail } from '../hotel-detail/detail.js';

/**
 * Class HotelList
 */
function HotelList() {
  'use strict';

  let hotelList,
    container = document.body,
    elements = () => {
      return document.querySelectorAll( '[data-hotel-id]' );
    };

  /**
   * Initialitze method
   * @return {void}
   */
  function init() {
    createHotelList();
  }

  /**
   * Creates hotel list
   * @return {Void}
   */
  function createHotelList() {
    const hotels = Object.values( list() );
    hotelList = template( hotels );
  }

  /**
   * Adds the hotel list to contaner
   * @return {Void}
   */
  function loadHotelList() {
    container.insertAdjacentHTML( 'beforeend', hotelList );
    bindEvents();
  }

  /**
   * Bind events to each options in the list
   * @return {Void}
   */
  function bindEvents() {
    let items = elements();
    items.forEach( ( el ) => {
      el.addEventListener( 'click', getHotelDetail );
    } );
  }

  /**
   * Loads the hotel detail component
   * @param  {Object} e Event Object
   * @return {Void}
   */
  function getHotelDetail( e ) {
    let hotelId = this.getAttribute( 'data-hotel-id' );
    e.preventDefault();
    hotelDetail( hotelId );
    setSelected( this );
  }

  /**
   * Sets selected option in menu
   * @param {Void}
   */
  function setSelected( selected ) {
    let items = elements();
    items.forEach( ( item ) => {
      item.classList.remove( 'selected' );
    } );
    selected.classList.add( 'selected' );
  }

  init();

  /**
   * Public API
   */
  return {
    loadHotelList: loadHotelList
  };

}

export { HotelList };