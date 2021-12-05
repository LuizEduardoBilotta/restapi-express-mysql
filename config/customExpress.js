const express = require('express');
const consign = require('consign');

module.exports = () => {
  const app = express();
  consign()
    .include('api/controllers')
    .into(app)

  return app;
}