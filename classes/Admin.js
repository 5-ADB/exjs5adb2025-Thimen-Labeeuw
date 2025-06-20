// Factuur Klasse
class Factuur {
  //constructor voor aanmaken van factuur
  constructor(factuurnummer, datum, bedrag, betaald = false) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  //factuur markeren als betaald
  markeerAlsBetaald() {
    this.betaald = true;
  }

  //factuur omzetten naar string
  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(
      2
    )} - ${this.betaald ? "Betaald" : "Openstaand"}`;
  }
}

// Klant Klasse
class Klant {
  //constructor voor aanmaken van klant
  constructor(id, naam, email) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
  }

  //factuur toevoegen in je lijst
  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }

  //gefilterde lijst maken van alle openstaande facturen
  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  //totaalbedrag krijgen van all je openstaande facturen
  getTotaalBedragOpenstaand() {
    let totaal = 0;
    this.getOpenstaandeFacturen().forEach((factuur) => {
      totaal += factuur.bedrag;
    });
    return totaal;
  }

  //alle facturen tonen
  printFacturen() {
    console.log(`facturen voor: ${this.naam}`);
    this.facturen.forEach((factuur) => {
      console.log(factuur.toString());
    });
  }
}

//exporteren van zowel de class "Factuur" als "Klant"
module.exports = {
  Factuur,
  Klant,
};
