// 1ere méthode de creation d 'objet:
// -Création d'objet litterale:
var user1 = {
    name: "jeff",
    age: 23,
    email: "jeff@email.com",
    direBonjour: function() {
        // return this.name + ': Bonjour, je m\'appelle ' + this.name + ' et j\'ai ' + this.age + ' ans.';
        return `${this.name}: Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`;
    }
}
console.log(user1.name);
console.log(user1.age);
console.log(user1.email);
console.log(user1.direBonjour());
var user2 = {
    name: "sarah",
    age: 20,
    email: "sarah@email.com",
    direBonjour: function() {
        // return this.name + ': Bonjour, je m\'appelle ' + this.name + ' et j\'ai ' + this.age + ' ans.';
        return `${this.name}: Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`;
    }
}
console.log(user2.name);
console.log(user2.age);
console.log(user2.email);
console.log(user2.direBonjour());
console.log(user1);
console.log(user2);
// Differentes façons d'écrire une fonction en JS
function nomDeLaFonction() {}
const nomDelaFonction2 = function() {}
const nomDeLaFonction3 = () => {}
// Méthode du constructeur
// Toute fonction en JS est un constructeur d'objet.
// Pour décrire un objet au moyen d'une fonction constructeur
// il suffit d'utiliser le mot clef 'this' pour définir les propriétés
// de l'objet.
// convention de nommage (POO)
// le nom doit être écrit en PascalCase
function User(nom, age, email) {
    this.name = nom;
    this.age = age;
    this.email = email;
    this.direBonjour = function() {
        return `${this.name}: Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`;
    }
}
var jeff = new User('jeff', 23, 'jeff@email.com');
console.log(jeff);
var sarah = new User('sarah', 20, 'sarah@email.com');
console.log(sarah);
// 3eme méthode de creation d'objets:
// Les classes
class AnimalDuZoo
{
    // methode constructor
    // permet de déclarer et d'initialiser les
    // propriétées de notre objet lors de
    // l'instanciation de la classe par l'opérateur new
    constructor(nom, typeDeParc) {
        this.name = nom;
        this.location = typeDeParc;
    }
    seDeplace() {
        return `${this.name} se déplace vers son ${this.location}.`;
    }
    static respire() {
        return 'Tous les animaux respirent!!';
    }
}
var elephant = new AnimalDuZoo('Dumbo', 'enclos');
console.log(elephant);
console.log( elephant.seDeplace() );
console.log( AnimalDuZoo.respire() );
class Employe
{
    // methode constructor
    // permet de déclarer et d'initialiser les
    // propriétées de notre objet lors de
    // l'instanciation de la classe par l'opérateur new
    constructor(nom, age, email) {
        if(typeof nom !== 'string' || typeof age !== 'number' || typeof email !== 'string') {
            return
        }
        this.name = nom;
        this.age = age;
        this.email = email;
    }
    // getter de la propriété name
    // retourne la valeur contenue dans this.name
    getName() {
        return this.name;
    }
    // setter de la propriété name
    // permet de définir une nouvelle valeur dans
    // this.name
    setName(nom) {
        if(typeof nom !== 'string') {
            return
        }
        this.name = nom;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        if(typeof age !== 'number') {
            return
        }
        this.age = age;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        if(typeof email !== 'string') {
            return
        }
        this.email = email;
    }
}
class Manager extends Employe
{
    constructor(nom, age, email, salaire, cumulInitial) {
        // on passe au parent de Manager les données
        // d'initialisation necessaires à la définition de
        // ses propriétés (name, age et email)
        super(nom, age, email);
        // on teste les entrées
        if(typeof salaire !== 'number' || typeof cumulInitial !== 'number') {
            return;
        }
        // on initialise les propriétés
        this.salaire = salaire;
        this.balance = cumulInitial;
    }
    // getter de la propriété salaire
    getSalaire() {
        return this.salaire;
    }
    // setter de la propriété salaire
    setSalaire(salaire) {
        if(typeof salaire !== 'number') {
            return;
        }
        this.salaire = salaire;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        if(typeof balance !== 'number'){
            return;
        }
        this.balance = balance;
    }
    // méthode qui rajoute le montant d'un salaire
    // au total que possède le manager
    recoitSalaire() {
        this.balance += this.salaire;
    }
}
const sam = new Manager('sam', 20, 'sam@email.com', 3000, 0);
console.log(sam);
console.log(sam instanceof Manager);
console.log(sam instanceof Employe);
// creation d'une classe DirectionRH comportant
// qu'une méthode propre: paye()
// qui permet de rémunerer un objet de classe Manager
class DirectionRH extends Employe
{
    constructor(nom, age, email) {
        super(nom, age, email);
    }
    paye(collaborateur) {
        if(!collaborateur instanceof Manager) {
            return;
        }
        collaborateur.recoitSalaire();
    }
}
// instanciation de la classe DirectionRH
// et cfréation de l'objet Fabienne
const fabienne = new DirectionRH('fabienne', 35, 'fabienne@email.com');
// on log fabienne
console.log(fabienne);
// on fait fabienne payer sam
fabienne.paye(sam);
// on vérifie le contenu du compte de sam
// après perception de son salaire.
console.log(sam.getBalance());