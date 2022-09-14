const candies = [
  {
    name: 'Twizzlers',
    sweetPoints: 20
  }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    const newArr = [...candies, req.body];
    res.write(JSON.stringify(newArr));
    res.end();
  },
};
