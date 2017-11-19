export const template = ( hotels ) => {
  return `
  <nav>
    <ul class="hotel-list">
      ${hotels.map( hotel => `<li><a href="" data-hotel-id="${hotel.id}">${hotel.name}</a></li>`).join('')}
    </ul>
  </nav>
  `;
};