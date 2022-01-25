class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <article class="hero">
                <div class="overlay"></div>
                <div class="content">
                    <h1>All You Need to Know About Your Favorite Restaurant</h1>
                    <p>"Eat, Sleep, & Repeat"</p>
                    
                </div>
            </article>
        `;
  }
}

customElements.define('jumbotron-header', JumboTron);
