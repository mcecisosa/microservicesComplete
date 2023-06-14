const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(morgan("dev"));
app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001", //characters es el nombre del contenedor y 8001 el puerto
    changeOrigin: true,
  })
);

app.use(
  "/characters/:id",
  createProxyMiddleware({
    target: "http://characters:8001", //esto lo agregue yo, cuando llega /character/id redirige tb a /character:8001, redirige a la puerta de entrada del container character
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets/:id",
  createProxyMiddleware({
    target: "http://planets:8002",
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8003",
    changeOrigin: true,
  })
);

app.use(
  "/films/:id",
  createProxyMiddleware({
    target: "http://films:8003",
    changeOrigin: true,
  })
);
app.use("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(8000, () => {
  console.log("Gateway on port 8000");
});
