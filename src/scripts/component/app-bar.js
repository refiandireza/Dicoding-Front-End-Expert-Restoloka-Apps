class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
            <nav class="navbar">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">Restoloka <i class="fas fa-map-signs"></i></a>
                </div>

                <button id="hamburger" href="#" aria-label="Toggle Navigation"><i class="fas fa-align-right"></i></button>
                <ul class="drawer  ">
                    <li><a href="/">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/refiandi-reza-syawaldriyansah-85165261/">About Us</a></li>
                </ul>
            </nav>
        </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
