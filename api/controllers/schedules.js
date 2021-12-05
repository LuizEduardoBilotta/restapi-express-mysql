const schedules = require('../models/schedulesModel');

module.exports = (app) => {
  app.get('/schedules', (req, res) => {
    res.send('Bem vindo!');
  });

  app.post('/schedules', (req, res) => {
    const schedule = req.body;
    schedules.createSchedule(schedule, res);
  })
}