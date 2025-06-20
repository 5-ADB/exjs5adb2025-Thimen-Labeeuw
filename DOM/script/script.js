// Onderstaande JS code krijg je van mij
// pas aan waar jij denkt dat het nodig is!
const klanten = [
  {
    klantID: 1,
    naam: "Karel Kleintjes",
  },
  {
    klantID: 2,
    naam: "Els Dotjes",
  },
];

const facturenData = {
  1: [
    { id: 101, bedrag: 250, betaald: true },
    { id: 102, bedrag: 125, betaald: false },
    { id: 103, bedrag: 300, betaald: true },
  ],
  2: [
    { id: 201, bedrag: 400, betaald: false },
    { id: 202, bedrag: 150, betaald: false },
  ],
};

const klantSelect = document.getElementById("klantSelect");
const betaaldContainer = document.getElementById("betaaldContainer");
const nietBetaaldContainer = document.getElementById(
  "nietBetaaldContainer"
);
// ______________________________________________________________________________________
/**
 * Zorg ervoor dat:
 * 1. Alle klanten in de lijst van klanten komt
 * 2. Alle betaalde facturen van de klanten verschijnen van de gekozen klant
 * 3. Alle niet betaalde verschijnen
 * 4. De facturen kijrgen een kleur op basis van betaald / niet betaald (zie css)
 * 5. Klik je op een factuur-regel dan krijg je een popup met de prijs van de factuur
 */

//toevoegen van klanten aan dorpdown
VoegKlantenToe();

function VoegKlantenToe() {
  klanten.forEach((klant) => {
    const option = document.createElement("option");
    option.value = klant.klantID;
    option.innerHTML = klant.naam;
    klantSelect.appendChild(option);
  });
}

klantSelect.addEventListener("change", () => {
  VoegFacturenToe();
});

function VoegFacturenToe() {
  betaaldContainer.innerHTML = "";
  nietBetaaldContainer.innerHTML = "";
  for (let i = 0; i < facturenData[1].length; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let prijs = document.createElement("p");
    p.innerHTML = `factuur: ${facturenData[klantSelect.value][i].id}`;
    div.appendChild(p);
    div.appendChild(prijs);
    div.className = "factuur";
    div.addEventListener("click", () => {
      prijs.innerHTML = `prijs €${
        facturenData[klantSelect.value][i].bedrag
      }`;
    });
    if (facturenData[klantSelect.value][i].betaald) {
      div.className = "betaald";
      betaaldContainer.appendChild(div);
    } else {
      div.className = "niet-betaald";
      nietBetaaldContainer.appendChild(div);
    }
  }

  console.log(facturenData[1][0]);
}
