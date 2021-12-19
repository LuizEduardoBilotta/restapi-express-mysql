const schedules = require('../models/schedulesModel');

module.exports = (app) => {
  app.get('/schedules', (req, res) => {
    schedules.listSchedules(res);
  });

  app.get('/schedules/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    schedules.listSchedulesById(id, res);
  });

  app.patch('/schedules/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const informations = req.body;
    schedules.updateScheduleById(id, informations, res);
  });

  app.post('/schedules', (req, res) => {
    const schedule = req.body;
    schedules.createSchedule(schedule, res);
  })

  app.delete('/schedules/:id', (req, res) => {
    const id = parseInt(req.params.id);
    schedules.deleteScheduleById(id, res);
  });
}