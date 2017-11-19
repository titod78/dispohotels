/* globals describe, it, beforeEach */

import { HotelList } from './components/hotel-list/hotelList.js';

describe( 'Init App', function () {

  var hotelList;

  beforeEach( function () {
    hotelList = new HotelList( 'some-container' );
  } );

  it( 'Init App', function () {
    return true;
  } );

} );