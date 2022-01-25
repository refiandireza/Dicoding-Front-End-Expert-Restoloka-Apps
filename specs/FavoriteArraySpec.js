import { itActsAsFavoriteRestaurantModel } from './contract/favoriteContract';

let favoriteRestaurant = [];

const favoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((data) => data.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(data) {
    if (!data.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(data.id)) {
      return;
    }

    favoriteRestaurant.push(data);
  },

  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter((data) => data.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteRestaurant = []);

  itActsAsFavoriteRestaurantModel(favoriteRestaurantArray);
});
