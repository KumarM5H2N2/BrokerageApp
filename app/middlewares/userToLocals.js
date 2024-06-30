
import {Useraccess} from '../models/index.js';



// on configure le middleware qui rend disponible l'utilisateur connecté dans les vues
function userToLocals(request, response, next) {
  if (request.session?.user) {
    response.locals.user = Useraccess.build(request.session.user);
  }
  next();
}


export default userToLocals;

