const { createProxyMiddleware } = require('http-proxy-middleware');
const {REACT_APP_PROXY} = process.env

module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: REACT_APP_PROXY,
      changeOrigin: true,
    })
  );
};