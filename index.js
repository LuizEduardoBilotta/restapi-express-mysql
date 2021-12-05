const customExpress = require('./config/customExpress');

const port = 3000;
const app = customExpress();

app.listen(port, () => `Application online in port: [${port}]`);