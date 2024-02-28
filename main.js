// Définition de la classe
const Livre = class {
  constructor(titre, auteur, nbPages) {
    this.titre = titre;
    this.auteur = auteur;
    this.nbPages = nbPages;
  }
  affichage1() {
    console.log(
      "J'ai lu " +
        this.titre +
        " de " +
        this.auteur +
        " qui contient " +
        this.nbPages +
        " pages"
    );
  }
  affichage2(nom) {
    console.log("J'ai lu " + this.titre + " " + nom);
  }
  //Création d'un getters (accesseur) => Déclaration d'un getters

  get titreAuteur() {
    return this.titre + " est de " + this.auteur;
  }

  //Création d'un setters (mutateur)
  set changerTitre(value) {
    this.titre = value;
  }
};
//Appel d'une instance de class pour créer un nouvel objet livre
let monLivre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 120);
console.log(monLivre);
monLivre.changerTitre = "La tour sombre 4";

let livre2 = new Livre("La tour sombre", "Stephen King", 240);

console.log(livre2);

monLivre.affichage1();
livre2.affichage2("Olivier Robert-Duboille");

console.log(monLivre.titreAuteur);
