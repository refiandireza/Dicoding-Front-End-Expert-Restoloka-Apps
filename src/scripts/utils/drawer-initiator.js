const DrawerInitiator = {
  init({
    button, icon, drawer, content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, icon, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, icon, drawer);
    });
  },

  _toggleDrawer(event, icon, drawer) {
    event.stopPropagation();
    icon.classList.toggle('fa-times');
    drawer.classList.toggle('nav-slide');
  },

  _closeDrawer(event, icon, drawer) {
    event.stopPropagation();
    icon.classList.remove('fa-times');
    drawer.classList.remove('nav-slide');
  },
};

export default DrawerInitiator;
