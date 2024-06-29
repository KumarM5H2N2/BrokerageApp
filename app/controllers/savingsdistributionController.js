import Joi from "joi";
import { Savingsdistribution, Clientfile } from '../models/index.js';




export async function getAllSavingsdistribution(req, res) {
  const savingsdistribution = await Savingsdistribution.findAll({
    order: [
      ['id', getOrderFromQueryParams()],
          ],
  });

  res.status(200).json(savingsdistribution);


  // Bonus
  function getOrderFromQueryParams() {
    return req.query.order === 'desc' ? 'DESC' : 'ASC'; // Bonus : pouvoir choisir depuis le savingsdistribution en fonction de l'Id du client
  }
};




export async function createSavingsdistribution(req, res) {
    try {
      // Validation du corps de la requête
      const createSavingsdistributionSchema = Joi.object({
        savingstype: Joi.string().min(1),
        holder: Joi.string().min(1),
        estimatedvalue: Joi.number().integer().min(0),
        financialinstitute: Joi.string().min(1),
        clientfile_id: Joi.number().integer().min(0),
      }).min(1).message("Missing body parameters. Provide at least one required parameter.");
  
      const { error } = createSavingsdistributionSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      // Traitement
      const savingsdistribution = await Savingsdistribution.create({
        content: req.body.content,
        clientfile_id: parseInt(req.body.clientfile_id),
        savingstype: req.body.savingstype,
        holder: req.body.holder,
        estimatedvalue: req.body.estimatedvalue,
        financialinstitute: req.body.financialinstitute,
      });
  
      // Réponse
      res.status(201).json(savingsdistribution);
    } catch (error) {
      console.error("Error creating savingsdistribution:", error);
      res.status(500).json({ error: "Failed to create savingsdistribution" });
    }
  };
  
async function doesClientfileExist(id) {
    const clientfile = await Clientfile.findByPk(id);
    return !!clientfile; // Si clientfile est null, retourne false; sinon, retourne true.
  };
  




export default {
getAllSavingsdistribution,
createSavingsdistribution
  };