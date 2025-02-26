/**
 * Accordeon Class
 * @author Gabriel Caron <gabriel.caron@gmail.com>
 * @copyright © 2025, Gabriel Caron. Tous droits réservés.
 * @version 1.0
 * @param {HTMLElement} refAccordeon - L'accordéon HTML
 * @return {void}
 */

class Accordeon {
	private monAccordeon: HTMLDivElement;
	private monBouton: HTMLButtonElement;
	private estOuvert: boolean;

	constructor(refAccordeon: HTMLDivElement) {
		this.monAccordeon = refAccordeon;
		this.monBouton = this.monAccordeon.querySelector(".accordeon__bouton");
		this.monBouton.addEventListener("click", this.toggleAccordeon.bind(this));
		this.estOuvert = Boolean(this.monBouton.getAttribute("aria-expanded"));

		// Par défaut, les accordéons sont ouverts. Si JavaScript est actif, les accordéons sont fermés.
		this.toggleAccordeon();
	}

	private toggleAccordeon(): void {
		this.monBouton.setAttribute(
			"aria-expanded",
			`${(this.estOuvert = !this.estOuvert)}`
		);
		this.monAccordeon.classList.toggle("accordeon--active");
	}
}

// Instanciation des accordéons (si présents)
const Accordeons = document.querySelectorAll(".accordeon");
Accordeons.forEach((AccordeonElement: HTMLDivElement) => {
	new Accordeon(AccordeonElement as HTMLDivElement);
	console.log("Accordéon initialisé avec succès.");
});
