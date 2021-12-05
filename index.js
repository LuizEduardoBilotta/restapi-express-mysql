const customExpress = require('./config/customExpress');
const connectionDB = require('./config/dataBase');
const Tables = require('./config/tables');

const port = 3000;

connectionDB.connect((error) => {
  if(!error) {
    const app = customExpress();
    new Tables(connectionDB);
    app.listen(port, () => `[LOG]: Application online in port: [${port}]`);
  }
});




