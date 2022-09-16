import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
import sauces from './routes/sauces.js';
import bodyParser from './bodyParser.js';

const routes = {
  cats,
  candies,
  sauces
};

const log = (...args) => console.log('[server]', ...args);

export default async function (req, res) {
  const parts = req.url.split('/');
  if (parts.length && parts[1] === 'api') {
    req.body = await bodyParser(req);
    const resource = routes[parts[parts.length - 1]];
    if (!resource) notFound(req, res);
    else {
      const route = resource[req.method.toLowerCase()];
      if (route == undefined) notFound(req, res);
      else {
        log('route: ', route);
        route(req, res);
      }
    }
  }
}
