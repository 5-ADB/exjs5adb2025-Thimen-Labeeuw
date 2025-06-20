# Examen juni 2025

## Classes

/\*\* Maak een klant aan Karel Kleintjes (email: karel.kleintjes@example.com)

- Je maakt onderstaande facturen aan
- Factuur("F2025001", "2025-06-01", 250.0)
- Factuur("F2025002", "2025-03-13", 120.0, true)
- bovenstaande regels maken 2 facturen aan.
- Koppel deze facturen aan Karel Kleintjes als klant.

- Print je zijn facturen uit met de method: printFacturen() --> staat al in de code
- output MOET zoals onderstaande zijn:

```JS
> Facturen voor Karel kleintjes:
> Factuur F2025001: €250.00 - Openstaand
> Factuur F2025002: €120.00 - Betaald
```

- Als laatste zorg je dat dit werkt.
- console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
- output: Openstaand totaal: 250
  \*/

```JS
// Deze code krijg je
klant1.printFacturen();
console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());

```

## DOM

Zorg ervoor dat:

- Alle klanten in de lijst van klanten komt
- Alle betaalde facturen van de klanten verschijnen van de gekozen klant
- Alle niet betaalde verschijnen
- De facturen kijrgen een kleur op basis van betaald / niet betaald (zie css)
- Klik je op een factuur-regel dan krijg je een popup met de prijs van de factuur
