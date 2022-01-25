import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-idb';
import LikeButtonPresenter from '../../src/scripts/utils/favorite-btn-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
