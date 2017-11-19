var detailedHotels = require('../json/hotels.json');

module.exports = {
  path: '/api/hotels',
  method: 'GET',
  delay: [200, 1000],
  render: function (req, res) {
    var hotels = Object.keys(detailedHotels)
      .filter(function (id) {
         return !isNaN(parseInt(id, 10));
      })
      .map(function (id) {
        return {
          id: id,
          name: detailedHotels[id].name
        }
      });
    res.status(200).send(hotels);
  }
};
