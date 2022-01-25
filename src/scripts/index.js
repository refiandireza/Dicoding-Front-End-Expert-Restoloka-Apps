import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// import '../styles/fontawesome.scss';
import './component/app-bar.js';
import './component/hero.js';
import './component/foot-bar.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/App.js';
import swRegister from './utils/sw-register.js';

const app = new App({
  button: document.querySelector('#hamburger'),
  icon: document.querySelector('#hamburger i'),
  drawer: document.querySelector('.drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
