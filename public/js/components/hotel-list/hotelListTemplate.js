export const template = ( hotels ) => {
  return `
  <ul class="hotel-list">
    ${hotels.map( hotel => `<li data-hotel-id="${hotel.id}">${hotel.name}</li>`)}
  </ul>
  `;
};