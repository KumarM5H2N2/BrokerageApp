import { Useraccess } from "../models/index.js";



  export async function getAdminPage(request, response)  {
    try {
      // on récupère tous les quiz avec leur auteur
      const users = await Useraccess.findAll();
      // on renvoie le template home avec la liste des quiz
      response.render("admin", { users });
    } catch (err) {
      console.log(err);
      // si une erreur se produit, on renvoie une erreur 500
      return response.status(500).render("error", {
        error: {
          status: 500,
          name: err.name,
          message: err.message,
        },
      });
    }
  }




export default {
    getAdminPage
  };




