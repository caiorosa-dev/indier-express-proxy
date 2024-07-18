const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const proxyMiddleware = createProxyMiddleware({
  target: 'https://indier.co',
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    // Optional: Manipulate the request before sending it to the target
  },
  onProxyRes: (proxyRes, req, res) => {
    // Optional: Manipulate the response before sending it back to the client
  },
  onError: (err, req, res) => {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  },
});

app.use('/', proxyMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
