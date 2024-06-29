import { Useraccess } from "../models/index.js";
import bcrypt from "bcrypt";




export const getAuthSignupPage = async (_, response) => {
  response.render("signup");
};



export const postAuthSignupPage = async (request, response) => {
  try {
    const { email, prenom, nom, password, passwordConfirm } = request.body;

    if (password !== passwordConfirm) {
      return response.render("signup", {
        error: "Les mots de passe ne correspondent pas",
      });
    }

    const existingUser = await Useraccess.findOne({ where: { email } });
    if (existingUser) {
      return response.render("signup", {
        error: "Cet email est déjà utilisé",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(password,hashedPassword);
    await Useraccess.create({
      email,
      prenom,
      nom,
      password: hashedPassword,
    });

    response.redirect("/signin");
  } catch (err) {
    console.log(err);
    response.render("error", {
      error: {
        status: 500,
        name: err.name,
        message: err.message,
      },
    });
  }
};
  


export const getAuthSigninPage = async (_, response) => {
  response.render("signin");
};



export const postAuthSigninPage = async (request, response) => {
  try {

      const { email, password, remember } = request.body;

      const existingUser = await Useraccess.findOne({ where: { email } });
      if (existingUser) {
        const isValidPassword = await bcrypt.compare(password, existingUser.password);
        if (isValidPassword) {
          if (remember === "on") {
            request.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7;
          }

          request.session.user = existingUser;

          if (request.query.redirect) {
            return response.redirect(request.query.redirect);
          }

          return response.redirect("/");
        }
      }

      return response.render("signin", {
        error: "Mot de passe ou email incorrect",
      });
    } catch (err) {
      console.log(err);
      response.render("error", {
        error: {
          status: 500,
          name: err.name,
          message: err.message,
        },
      });
    }
};



  export const getSignout = async (_, response) => {
    request.session.destroy(() => {
      response.redirect("/");

  });
    
  


};




export default {
  getAuthSignupPage, 
  postAuthSignupPage,
  getAuthSigninPage,
  postAuthSigninPage,
  getSignout

};