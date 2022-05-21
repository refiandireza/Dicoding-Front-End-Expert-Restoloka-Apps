import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import RestaurantSource from '../../data/restaurant-source.js';
import { Spinner, errorResponse } from '../templates/spinner-template.js';
import PostReview from '../../utils/post-initiator.js';
import LikeButtonInitiator from '../../utils/favorite-btn-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-idb.js';

const Detail = {
  async render() {
    return `
    <div class="loading"></div>
    <div class="content-restaurant">
        
    </div>
    
    <div class="container">
        <div class="form-review">
            <h2>Write Your Review Here</h2>  
            <form>
                <div class="name-label">
                <label for="inputName" class="form-label">Name</label>
                <input name="inputName" type="text" class="form-control" id="inputName" placeholder="Input Your Name" required>
                </div>
                <div class="input-label">
                <label for="inputReview" class="form-label">Review</label>
                <input name="inputReview" type="text" class="form-control" id="inputReview" placeholder="Write Your Review" required>
                </div>
                <button id="submit-review" type="submit" class="btn2">Submit</button>
            </form>
        </div>
    </div>

    <div id="likeButtonContainer"></div>
    
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('.loading');
    const container = document.querySelector('.content-restaurant');
    const reviewContainer = document.querySelector('.container .form-review');

    loading.scrollIntoView(0);
    loading.innerHTML = Spinner();
    container.style.display = 'none';
    reviewContainer.style.display = 'none';

    try {
      const data = await RestaurantSource.detailRestaurant(url.id);
      container.innerHTML = createRestaurantDetailTemplate(data.restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        data,
      });

      container.style.display = 'block';

      loading.style.display = 'none';
      reviewContainer.style.display = 'block';
    } catch (err) {
      loading.innerHTML = '';
      loading.innerHTML += errorResponse();
      console.log(err);
    }

    const btnSubmitReview = document.querySelector('#submit-review');
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();
      await PostReview(url, inputName.value, inputReview.value);
      Swal.fire({
        title: 'Comment Has Been Added',
        icon: 'success',
      });
      inputName.value = '';
      inputReview.value = '';
    });
  },
};

export default Detail;
