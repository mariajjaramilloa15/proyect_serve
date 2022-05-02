const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const {
    logErrors,
    errorHandler,
    BoomerrorHandler,
  } = require('./src/handlers/errors.handler');
  const routerApi = require('./src/routes');

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Success connection to db");
      app.listen(PORT_SERVER, () => {
        console.log("###################");
        console.log("#####API REST######");
        console.log("###################");
        console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
      });
    }
  }
);

app.use(express.json());
app.use(logErrors);
app.use(errorHandler);
app.use(BoomerrorHandler);
/* Permitir hacer el llamado de los request */
routerApi(app);
