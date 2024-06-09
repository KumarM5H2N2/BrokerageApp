
import express from 'express'; // The Express framework to create the server application.
import router from './routers/index.router.js'; // Our application's routes.
/*import errorHandler from './helpers/error.handler.js'; // A middleware to manage errors
import createDoc from './helpers/swagger.doc.js'; // A function for configuring Swagger.
import logger from './helpers/index.logger.js'; // A logging module to record requests.
*/
const app = express();


/*
//Captures and logs incoming HTTP requests: It logs the user's IP address and
//the requested URL, which can be useful for monitoring, debugging or security
//purposes.
app.use((req, _, next) => {
  logger.http(`${req.ip} ${req.url}`, { httpStatus: 200 });
  next();
});
*/


// integrates Swagger into Express application, enabling you to generate and
// serve detailed, interactive API documentation. This improves communication
// and collaboration between developers, and makes your API easier to use.
/*createDoc(app);*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
/*app.use(errorHandler);*/



// This module will use modules, such as the router, request management
// middleware...
export default app;