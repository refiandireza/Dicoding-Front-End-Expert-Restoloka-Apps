import Swal from 'sweetalert2';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator.js';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, data, favoriteRestaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isDataExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDataExist(id) {
    const data = await this._favoriteRestaurant.getRestaurant(id);
    return !!data;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      Swal.fire({
        title: 'Added To Favorite List',
        icon: 'success',
      });
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      Swal.fire({
        title: 'Removed From Favorite List',
        icon: 'success',
      });
      this._renderButton();
    });
  },

};

export default LikeButtonPresenter;
