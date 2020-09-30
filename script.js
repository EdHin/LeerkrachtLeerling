class Persoon {
    constructor (voornaam,achternaam,email) {
        this.voornaam = voornaam;
        this.achternaam = achternaam; 
        this.email = email;
    }
}



class Leerling extends Persoon {
    constructor (voornaam,achternaam,email,adres,telefoonnummer,klas) {
        super(voornaam,achternaam,email);
        this.adres = adres;
        this.telefoonnummer = telefoonnummer;
        this.email = email;
        this.klas = klas;
    }
}

var pietje = new Leerling (Pietje,Knor,pietjeknor@hotmail.com,pietjeknorstraat,06123456789,4VF)

class Leraar extends Persoon {
    constructor (voornaam,achternaam,email,adres,telefoonnummer,klas) {
        super(voornaam,achternaam,email);
        this.afkorting = afkorting;
        this.mentorklas = mentorklas;
    }
}
pietje.show();