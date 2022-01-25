const assert = require('assert');

Feature('Unliking Restaurants');

const noFavorite = 'Oops, You don\'t have any favorite restaurant yet';

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(noFavorite, '.nofav-status');

  I.amOnPage('/');

  I.seeElement('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.swal2-confirm');
  I.click(locate('.swal2-confirm'));
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.card-title a');

  I.click(locate('.card-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.swal2-confirm');
  I.click(locate('.swal2-confirm'));

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
  I.dontSeeElement('.car-title');
  const noFavText = await I.grabTextFrom('.nofav-status');
  assert.strictEqual(noFavText, noFavorite);
});
