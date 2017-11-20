export const template = ( hotel ) => {
  return `
  <article class="hotel-detail">
    <div class="hotel-detail-image">
      <img src="${hotel.imgUrl}">
    </div>
    <span class="hotel-detail-name">
      ${hotel.name}
    </span>
    <span class="rating rating_${hotel.rating}"></span>
    <div>
      <span class="hotel-detail-price">
        &pound;${hotel.price}
      </span>
    </div>
  </article>
  `;
};