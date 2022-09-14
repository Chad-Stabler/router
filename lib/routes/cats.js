const cats = [
  {
    name: 'Jimmy',
    flavor: 'Citrus'
  },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    const newArr = [...cats, req.body];
    res.write(JSON.stringify(newArr));
    res.end();
  },
};
