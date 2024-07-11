/*
// Ease of management: By using a dedicated file like env.load.js to load these
//variables, we centralize this logic in one place, making management and
//debugging simpler.
import './app/helpers/env.load.js';



// We have set "type": "module" on the package.json file in order to use the ESM (EcmaScript
//Modules import/export). Then we have asynchrone context at the whole root of all
//JS files of our app ; this allows to use directly "await" without writing an asynchrone
//function.
import { createServer } from 'node:http';



//We provide the express application we've created as a query response function
import expressApp from './app/index.app.js';
const httpServer = createServer(expressApp);



//By convention, we'll name a primitive variable in uppercase, to make it clear
//that its value cannot change.
const PORT = process.env.PORT || 3002;




httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}coucou`);
});
*/


import express from 'express';
import { createServer } from 'http';
import pkg from 'pg';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import userToLocals from './app/middlewares/userToLocals.js';


import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

// you can define global variables in the application that will always be available in the views
app.locals.siteName = "BrokerageApp";




// configure the view rendering engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// configure the folder containing static files (images, css, etc.)
app.use(express.static("public"));





// configure the middleware that manages sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

/*
//Debugging for my session
app.use((req, res, next) => {
  console.log('Session:', req.session);
  next();
});
*/


// on configure le middleware qui met à disposition l'utilisateur connecté dans les views
app.use(userToLocals);



const pool = new Pool({
  connectionString: process.env.PG_URL,
});



// Inclure votre routeur
import router from './app/routers/index.router.js';  // Vérifiez que le fichier router.js est bien à la racine
app.use(router);

const httpServer = createServer(app);

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
