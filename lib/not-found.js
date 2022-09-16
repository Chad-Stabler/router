export default function (req, res) {
  res.statusCode = 404;
  const notFound = {
    status: res.statusCode,
    error: 'Route/Resource Not Found'
  };
  res.write(JSON.stringify(notFound));
  res.end();
}
