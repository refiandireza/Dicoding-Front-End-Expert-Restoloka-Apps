import count from '../../data/favorite-count.json';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';
import { Spinner, errorResponse, noFavorite } from '../templates/spinner-template.js';
import FavoriteRestaurantIdb from '../../data/favorite-idb.js';

const Favorite = {
  async render() {
    return `
    <article class="restaurant">
        <div class="loading"></div>
        <div class="container">
            <h1 tabindex= "0" class="title">Favorite List</h1>
            <div class="line"></div>

            <div class="nofav-status"></div>
            <div class="wrapper">

            </div>
            
        </div>
    </article>
    `;
  },

  async afterRender() {
    const itemContainer = document.querySelector('.wrapper');
    const noFavStatus = document.querySelector('.nofav-status');
    const container = document.querySelector('.container');
    const loading = document.querySelector('.loading');
    const source = count.restaurants;

    loading.innerHTML = Spinner();
    container.style.display = 'none';
    itemContainer.innerHTML = '';

    try {
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
      if (restaurant.length === 0) {
        noFavStatus.innerHTML = noFavorite();

        container.style.display = 'block';
        loading.style.display = 'none';
      } else {
        const result = restaurant.map(({
          id, name, description, pictureId, city, rating,
        }, i) => ({
          id, name, description, pictureId, city, rating, ...source[i],
        }));

        result.forEach((item) => {
          itemContainer.innerHTML += createRestaurantItemTemplate(item);
        });

        container.style.display = 'block';
        loading.style.display = 'none';
      }

      // input like value from source to restaurant
    } catch (err) {
      loading.innerHTML = '';
      loading.innerHTML += errorResponse();
      console.log(err);
    }
  },
};

export default Favorite;
