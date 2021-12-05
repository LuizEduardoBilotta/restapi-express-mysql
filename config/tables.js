class Tables {
  constructor(connectionDB) {
    this.connection = connectionDB;
    this.createSchedule();
  }

  createSchedule() {
    const sql = 'CREATE TABLE IF NOT EXISTS schedules ('
      + 'id int NOT NULL  AUTO_INCREMENT,'
      + 'client varchar(50) NOT NULL,'
      + 'pet varchar(20),'
      + 'service varchar(20) NOT NULL,'
      + 'scheduleDate datetime NOT NULL,'
      + 'createdDate datetime NOT NULL,'
      + 'status varchar(20) NOT NULL,'
      + 'observation text,'
      + 'PRIMARY KEY(id))';
      
      this.connection.query(sql, error => {
        if(error) {
          console.log(error);
        }

        console.log('[LOG]: Schedules table created with success');
      })
  }
}

module.exports = Tables;