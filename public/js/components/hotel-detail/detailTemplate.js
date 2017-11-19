export const template = ( hotel ) => {
  return `
  <article class="hotel-detail">
    <span class="hotel-detail-image">
      <img src="${hotel.imgUrl}">
    </span>
    <span class="hotel-detail-name">
      ${hotel.name}
    </span>
    <span class="hotel-detail-price">
      ${hotel.price}
    </span>
    <div class="rating"></div>
    <div class="rating rating_${hotel.rating}"></div>
  </article>
  `;
};