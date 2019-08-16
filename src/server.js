import app from './app';

const serverInstance = app.listen(8080, () => {
  const host = serverInstance.address().address;
  const { port } = serverInstance.address();
  console.log('API listening at http://%s:%s', host, port);
});
