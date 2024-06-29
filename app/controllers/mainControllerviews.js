import { Clientfile } from "../models/index.js";


export async function getHomePage(request, response)  {
    try {
      // on récupère tous les quiz avec leur auteur
      const quizzes = await Clientfile.findAll();
      // on renvoie le template home avec la liste des quiz
      response.render("home", { quizzes });
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
  // Fonction pour gérer les pages non trouvées
export function notFound(request, response) {
    response.status(404).render("error", {
      error: {
        status: 404,
        name: "Not found",
        message: "Désolé, la page demandée n'existe pas.",
      },
    });
  }

  export default {
    getHomePage,
    notFound
  };