import RestaurantSource from '../../data/restaurant-source.js';
import count from '../../data/favorite-count.json';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';
import { Spinner, errorResponse } from '../templates/spinner-template.js';

const Home = {
  async render() {
    return `
    <article class="restaurant">
        <div class="loading"></div>
        <div class="container">
            <h1 tabindex= "0" class="title">Restaurants List</h1>
            <div class="line"></div>
            
            <div class="wrapper">
            </div>
            
        </div>
        <div id="likeButtonContainer"></div>
    </article>
    `;
  },

  async afterRender() {
    const itemContainer = document.querySelector('.wrapper');
    const container = document.querySelector('.container');
    const loading = document.querySelector('.loading');
    const source = count.restaurants;

    loading.innerHTML = Spinner();
    container.style.display = 'none';
    itemContainer.innerHTML = '';

    try {
      const restaurant = await RestaurantSource.getAllRestaurant();

      // input like value from source to restaurant
      const data = restaurant.map(({
        id, name, description, pictureId, city, rating,
      }, i) => ({
        id, name, description, pictureId, city, rating, ...source[i],
      }));

      data.forEach((item) => {
        itemContainer.innerHTML += createRestaurantItemTemplate(item);
      });

      container.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      loading.innerHTML = '';
      loading.innerHTML += errorResponse();
      console.log(err);
    }
  },
};

export default Home;
