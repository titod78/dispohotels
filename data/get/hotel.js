var hotels = require('../json/hotels.json');

module.exports = {
  path: '/api/hotels/:id',
  method: 'GET',
  delay: [200, 1000],
  render: function (req, res){
    var id = parseInt(req.params.id, 10);
    res.status(200).send(hotels[id]);
  }
};
