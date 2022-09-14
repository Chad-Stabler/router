const sauces = [
    {
        name: 'Soy Sauce',
        flavor: 'Salty'
    }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.end();
  },
  post(req, res) {
    const newArr = [...sauces, req.body];
    res.write(JSON.stringify(newArr));
    res.end();
  },
  put(req, res) {
    const sauceToUpdate = sauces[sauces.findIndex((sauce) => sauce.name === req.body.name)];
      sauceToUpdate.name = req.body.newName;
      res.write(JSON.stringify(sauces));
      res.end();
  }
};