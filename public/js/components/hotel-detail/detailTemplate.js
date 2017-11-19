export const template = ( hotel ) => {
  return `
  <div class="hotel-detail">
    <span class="hotel-detail-image">
      <img src="${hotel.imgUrl}">
    </span>
    <span class="hotel-detail-name">
      ${hotel.name}
    </span>
    <div class="rating"></div>
    <div class="rating rating_${hotel.rating}"></div>
  </div>
  `;
};