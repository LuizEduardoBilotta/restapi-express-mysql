const express = require('express');
const consign = require('consign');

module.exports = () => {
  const app = express();

  app.use(express.json());
  
  console.log('[LOG]: Botting consign...')

  consign()
    .include('api/controllers')
    .into(app)

  return app;
}