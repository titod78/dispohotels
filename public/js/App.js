/**
 * Controller for lastminute.com Challenge
 * From this controller the hotelList component is instanciated
 */

/**
 * Component hotelList
 * @type {Class}
 */
import { HotelList } from './components/hotel-list/hotelList.js';

( function () {
  'use strict';

  /**
   * Initialitze method
   * @return {void}
   */
  const init = () => {
    let hotels = new HotelList();
    hotels.loadHotelList();
  };

  init();

} )();