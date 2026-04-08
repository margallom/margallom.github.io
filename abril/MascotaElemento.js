class MascotaElemento extends HTMLElement {
  constructor() {
    super();
    console.log("Constructor ", this);
  }
}

customElements.define("mascota-elemento", MascotaElemento);
