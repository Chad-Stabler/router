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
  }
};