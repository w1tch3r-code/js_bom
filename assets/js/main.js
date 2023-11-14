"use strict";

// ===================================================
//      	 		JS-Vertiefung – BOM
// ===================================================

// ===================================================
//       	JS-Vertiefung – BOM-Level_1_1
// ===================================================

console.log("%c JS-Vertiefung – BOM-Level_1_1", "color: tomato");

// Aufgabenstellung:
// Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.
// Nutzen kannst Du:
// setTimeout()

const waitTime = () => {
	console.log("Start. Warten für 3 Sekunden");
	setTimeout(() => {
		console.log("Erledigt. Du hast 3 Sekunden verschwendet");
	}, 3000);
};
waitTime();

//================================================
// Nutzen kannst Du:
// setInterval()
// clearInterval()
// if, else

let counter = 10;

const countdown = () => {
	console.log(counter--);
};

const setCountdown = setInterval(countdown, 1000);

setTimeout(() => {
	clearInterval(setCountdown);
	console.log("Endlich Feierabend");
}, 10000);

// ===================================================
//       	JS-Vertiefung – BOM-Level_1_2
// ===================================================

console.log("%c JS-Vertiefung – BOM-Level_1_2", "color: tomato");

// Aufgabenstellung:

// Schreibe eine Funktion, die beim Drücken des Buttons von 100% bis 0% runter zählt (siehe Ergebnisvorschau).
// HTML und CSS befindet sich im Kommentar.
// Nutzen kannst Du:
// onclick
// setInterval()
// clearInterval()
// if, else if
// querySelector()

const countingDown = () => {
	let counter = 100;
	const zeit = document.querySelector(".zeit");
	setInterval(() => {
		if (counter < 0) {
			clearInterval();
		} else {
			zeit.textContent = `${counter--}%`;
		}
	}, 100);
};

// ===================================================
//       	JS-Vertiefung – BOM-Level_2_1
// ===================================================

// Aufgabenstellung:

// Schreibe eine Funktion, die beim Start die Zahlen runter zählt.
// Schau Dir die Ergebnisvorschau an.

// Der HTML und CSS Code befindet sich im Kommentar.
// Nutzen kannst Du:
// setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if


console.log("%c JS-Vertiefung – BOM-Level_2_1", "color: tomato");

const countDown2 = () => {
	let counter = 10;
	const count = document.querySelector("#count");
	const message = document.querySelector(".message");

	setInterval(() => {
		if (counter < 0) {
			clearInterval();
			message.style.opacity = 0;
		} else {
			count.textContent = `${counter--}`;
		}
	}, 1000);
};

countDown2();
