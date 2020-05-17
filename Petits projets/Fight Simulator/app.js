class Personnage{
    constructor (pseudo,classe,sante,attaque,niveau){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    evoluer(){
        this.niveau++; 
        console.log(this.pseudo + ' passe au niveau ' + this.niveau )
    }

    verifierSante(){
        if (this.sante == 0 || this.sante < 0)
        {
            this.sante = 0;
            console.log(this.pseudo + ' a perdu !');
        }
    }

    // Getter
    informations(){
        console.log(this.pseudo + ' (' + this.classe + ') a ' + this.sante + ' points de vie et est au niveau ' + this.niveau);

    }
}


class Magicien extends Personnage{
    constructor (pseudo,classe,attaque,sante) {
        super(pseudo,"Magicien",170,90);
    }

    attaquer(Personnage){
        Personnage.sante -= this.attaque;
        console.log(this.pseudo + ' attaque ' + Personnage.pseudo + ' en lançant un sort (['+this.attaque+'] dégats)');
        this.evoluer();
        Personnage.verifierSante();
    }

    coupSpecial(Personnage){
        Personnage.sante -= this.attaque*5;
        console.log(this.pseudo + 'attaque ' + Personnage.pseudo + ' avec son coup spécial "Puissance des arcanes".');
        this.evoluer();
        Personnage.verifierSante();

    }
}


class Guerrier extends Personnage {
    constructor(pseudo,classe,sante,attaque){
        super(pseudo,"Guerrier",350,50);
    }

    attaquer(Personnage){
        Personnage.sante -= this.attaque;
        console.log(this.pseudo + ' attaque ' + Personnage.pseudo + ' avec son épée (['+this.attaque+'] dégats)');
        this.evoluer();
        Personnage.verifierSante();
    }

    coupSpecial(Personnage){
        Personnage.sante -= this.attaque*5;
        console.log(this.pseudo + 'attaque ' + Personnage.pseudo + ' avec son coup spécial "Hache de guerre".');
        this.evoluer();
        Personnage.verifierSante();
    }
}
var Merlin = new Magicien("Merlin");
var Lancelot = new Guerrier("Lancelot");
Lancelot.informations();
Merlin.informations();

Lancelot.attaquer(Merlin);
Merlin.attaquer(Lancelot);

