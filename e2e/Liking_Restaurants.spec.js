const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const noFavorite = 'Oops, You don\'t have any favorite restaurant yet';

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.wrapper');
  I.see(noFavorite, '.nofav-status');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.see(noFavorite, '.nofav-status');

  I.amOnPage('/');

  I.seeElement('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
