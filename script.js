class Leerling {
    constructor (voornaam,achternaam,adres,telefoonnummer,email,klas) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.adres = adres;
        this.telefoonnummer = telefoonnummer;
        this.email = email;
        this.klas = klas;
    }
}

class Leraar {
    constructor (voornaam, achternaam, afkorting, email, mentorklas) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.afkorting = afkorting;
        this.email = email;
        this.mentorklas = mentorklas;
    }
}