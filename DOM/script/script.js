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

//event toevoegen aan je klantenselect voor het tonen van de facturen
klantSelect.addEventListener("change", () => {
  VoegFacturenToe();
});

//facturen tonen bij juiste sectie
function VoegFacturenToe() {
  //resetten van vorige facturen
  betaaldContainer.innerHTML = "";
  nietBetaaldContainer.innerHTML = "";
  //door alle facturen gaan
  for (let i = 0; i < facturenData[1].length; i++) {
    //elementen aanmaken zoals je div/p voor zowel de factuur als de prijs
    let div = document.createElement("div");
    let p = document.createElement("p");
    let prijs = document.createElement("p");
    //text van je p aanpassen naar je factuurID
    p.innerHTML = `factuur: ${facturenData[klantSelect.value][i].id}`;
    //alles toevoegen aan je div
    div.appendChild(p);
    div.appendChild(prijs);
    div.className = "factuur";
    //event toevoegen als je op de factuur klikt dat de prijs tevoorschijn komt
    div.addEventListener("click", () => {
      prijs.innerHTML = `prijs €${
        facturenData[klantSelect.value][i].bedrag
      }`;
    });
    //kijken of je factuur al dan wel/niet betaald is en dan een classname aan toe voegen
    //die zorgt dat het de juiste kleur krijgt
    if (facturenData[klantSelect.value][i].betaald) {
      div.className = "betaald";
      betaaldContainer.appendChild(div);
    } else {
      div.className = "niet-betaald";
      nietBetaaldContainer.appendChild(div);
    }
  }
}
