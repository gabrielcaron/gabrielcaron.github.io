class Accordeon {
    constructor(refAccordeon) {
        this.monAccordeon = refAccordeon;
        this.monBouton = this.monAccordeon.querySelector(".accordeon__bouton");
        this.monBouton.addEventListener("click", this.toggleAccordeon.bind(this));
        this.estOuvert = Boolean(this.monBouton.getAttribute("aria-expanded"));
        this.toggleAccordeon();
    }
    toggleAccordeon() {
        this.monBouton.setAttribute("aria-expanded", `${(this.estOuvert = !this.estOuvert)}`);
        this.monAccordeon.classList.toggle("accordeon--active");
    }
}
const Accordeons = document.querySelectorAll(".accordeon");
Accordeons.forEach((AccordeonElement) => {
    new Accordeon(AccordeonElement);
    console.log("Accordéon initialisé avec succès.");
});
//# sourceMappingURL=accordeon.js.map