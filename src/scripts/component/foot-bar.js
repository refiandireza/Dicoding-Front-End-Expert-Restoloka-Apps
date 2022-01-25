class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Copyright &copy; 2021 - Restoloka Apps</p>
            <p>Created by <i class="fab fa-canadian-maple-leaf"></i> Refiandi Reza S </p>
        </footer>
        `;
  }
}

customElements.define('foot-bar', FootBar);
