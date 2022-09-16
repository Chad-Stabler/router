const cats = [
  {
    name: 'Jimmy',
    flavor: 'Citrus'
  },
  {
    name: 'Marcus',
    flavor: 'Sweet'
  },
  {
    name: 'Dargyn',
    flavor: 'purple'
  }
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
  put(req, res) {
      const catToUpdate = cats[cats.findIndex((cat) => cat.name === req.body.name)];
      catToUpdate.name = req.body.newName;
      res.write(JSON.stringify(cats));
      res.end();
  },
  delete(req, res) {
    const catToDelete = cats[cats.findIndex(cat => cat.name === req.body.name)];
    const catNotFound = {
      error: 'cat not found'
    }
    if (!catToDelete) res.write(JSON.stringify(catNotFound));
    else {
      cats.splice(catToDelete, 1)
      res.write(JSON.stringify(cats));
      res.end();
    }
  }
};
