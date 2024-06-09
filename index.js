// We have set "type": "module" on the package.json file in order to use the ESM (EcmaScript
//Modules import/export). Then we have asynchrone context at the whole root of all
//JS files of our app ; this allows to use directly "await" without writing an asynchrone
//function.
import { createServer } from 'node:http';



// Ease of management: By using a dedicated file like env.load.js to load these
//variables, we centralize this logic in one place, making management and
//debugging simpler.
import './app/helpers/env.load.js';



//We provide the express application we've created as a query response function
import expressApp from './app/index.app.js';
const httpServer = createServer(expressApp);



//By convention, we'll name a primitive variable in uppercase, to make it clear
//that its value cannot change.
const PORT = process.env.PORT || 3002;




httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}coucou`);
});
