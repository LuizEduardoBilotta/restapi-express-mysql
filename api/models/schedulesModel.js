const moment = require('moment');
const connectionDB = require('../../config/dataBase');

class Schedules {

  createSchedule(schedule, res) {
    console.log('[LOG]: Calling creating new schedule...');

    const createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const scheduleDate = moment(schedule.scheduleDate, 'DD-MM-YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');
    
    const scheduleDateIsValid = moment(scheduleDate).isSameOrAfter(createdDate);
    const clientIsValid = schedule.client.length >= 5;

    const validations = [
      {
        name: 'date',
        valid: scheduleDateIsValid,
        message: 'Date must be greater than the current date'
      },
      {
        name: 'client',
        valid: clientIsValid,
        message: 'Customer must be at least five characters long'
      }
    ];

    const errors = validations.filter(objectError => !objectError.valid);
    const errorsExists = errors.length;

    if (errorsExists) {
      console.log('[LOG]: Validation Error is ocurred:');
      errors.map(error => console.log(`[ERROR MESSAGE]: ${error.message}`));
      return res.status(400).json(errors);
    }

    const scheduleHandled = { ...schedule, scheduleDate, createdDate };
    
    const sql = 'INSERT INTO schedules SET ?'

    connectionDB.query(sql, scheduleHandled, (error, result) => {
      if(error) {
        console.log(`[ERROR]: ${ error }`);
        return res.status(400).send(error);
      } 
      console.log('[LOG]: Schedule created with success!' );
      return res.status(201).send();
    });
  }

  listSchedules(res) {
    console.log('[LOG]: Calling list schedules...');

    const sql = 'SELECT * from schedules';
    
    connectionDB.query(sql, (error, result) => {
      if(error) {
        console.log(`[ERROR]: ${ error }`);
        return res.status(400).send(error);
      } 

      console.log(`[LOG]: Listing results: [${JSON.stringify(result)}]` );
      return res.status(200).send(result);
    });
  }

  listSchedulesById(id, res) {
    console.log('[LOG]: Calling list schedule by id...');

    const sql = `SELECT * from schedules where id = ${id}`;
    
    connectionDB.query(sql, (error, result) => {
      if (error) {
        console.log(`[ERROR]: ${ error }`);
        return res.status(400).send(error);
      }

      console.log(`[LOG]: Listing result: [${JSON.stringify(result[0])}]` );
      return res.status(200).send(result[0]);
    });
  }

  updateScheduleById(id, informations, res) {
    console.log('[LOG]: Calling update schedule by id...');

    const sql = 'UPDATE schedules SET ? where id = ?';

    if (informations.scheduleDate) {
      informations.scheduleDate = moment(informations.scheduleDate, 'DD-MM-YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');
    }
    
    connectionDB.query(sql, [informations, id], (error, result) => {
      if (error) {
        console.log(`[ERROR]: ${ error }`);
        return res.status(400).send(error);
      }

      console.log(`[LOG]: Updated id: [${id}] with informations: [${JSON.stringify(informations)}]` );
      return res.status(200).send({ id, ...informations });
    });
  }

  deleteScheduleById(id, res) {
    console.log('[LOG]: Calling delete schedule by id...');

    const sql = 'DELETE from schedules where id = ?';

    connectionDB.query(sql, id, (error) => {
      if (error) {
        console.log(`[ERROR]: ${ error }`);
        return res.status(400).send(error);
      }

      console.log(`[LOG]: Delete schedule id: [${id}]`);
      return res.status(200).send({ id });
    })
  }
}

module.exports = new Schedules();