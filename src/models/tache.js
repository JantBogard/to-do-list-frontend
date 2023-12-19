import User from "./user";

export default class Tache {
  id = 0;
  libelle = "";
  description = "";
  etat = false;
  isFavoris = false;
  dateDebut = new Date();
  dateFin = new Date();
  user = new User();
}
