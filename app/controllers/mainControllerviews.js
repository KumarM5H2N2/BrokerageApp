
import { Clientfile } from "../models/index.js";

export async function getHomePage(request, response) {
  try {
    // Récupérer tous les clientfiles
    const clientfiles = await Clientfile.findAll();

    // Rendre le template home avec la liste des clientfiles
    response.render("home", { clientfiles });
  } catch (error) {
    console.error('Error fetching clientfiles:', error);
    // Rendre une erreur 500 en cas d'erreur
    response.status(500).render("error", {
      error: {
        status: 500,
        name: error.name,
        message: "Erreur lors de la récupération des données.",
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
