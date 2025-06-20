// Factuur Klasse
class Factuur {
  constructor(factuurnummer, datum, bedrag, betaald = false) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  markeerAlsBetaald() {
    this.betaald = true;
  }

  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(
      2
    )} - ${this.betaald ? "Betaald" : "Openstaand"}`;
  }
}

// Klant Klasse
class Klant {
  constructor(id, naam, email) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
  }

  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }

  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  getTotaalBedragOpenstaand() {
    let totaal = 0;
    this.facturen.forEach((factuur) => {
      if (!factuur.betaald) {
        totaal += factuur.bedrag;
      }
    });
    return totaal;
  }

  printFacturen() {
    console.log("facturen voor Karel kleintjes: ");
    this.facturen.forEach((factuur) => {
      console.log(factuur.toString());
    });
  }
}

module.exports = {
  Factuur,
  Klant,
};
