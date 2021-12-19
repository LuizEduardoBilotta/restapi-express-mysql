class Tables {

  async createSchedule(connectionDB) {
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
      
      connectionDB.query(sql, await Promise.resolve()
        .then(console.log('[LOG]: Schedules table created with success'))
        .catch(error => console.log(error)));
  }
}

module.exports = new Tables();