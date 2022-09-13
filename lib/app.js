import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
// import bodyParser from './bodyParser.js';

const routes = {
  cats,
  candies,
};

const log = (...args) => console.log('[server]', ...args);

export default async function (req, res) {
  const parts = req.url.split('/');
  if (parts.length && parts[1] === 'api') {
    const resource = routes[parts[parts.length - 1]];

    const route = resource[req.method.toLowerCase()];
    log('route: ', route);
    route(req, res);
  }
}
