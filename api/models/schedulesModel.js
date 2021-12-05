const moment = require('moment');
const connectionDB = require('../../config/dataBase');

class Schedules {

  createSchedule(schedule) {
    console.log('[LOG]: Creating new schedule...')

    const createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const scheduleDate = moment(schedule.scheduleDate, 'DD-MM-YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');
    const scheduleHandled = { ...schedule, scheduleDate, createdDate };
    
    const sql = 'INSERT INTO schedules SET ?'

    connectionDB.query(sql, scheduleHandled, (error, result) => {
      if(error) {
        console.log(`[ERROR]: ${ error }`);
      } else {
        console.log('[LOG]: Schedule created with success!' )
      }
    });
  }
}

module.exports = new Schedules();