const assert = require('assert');

Feature('Review Details');

Scenario('Customer Review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  I.click(firstRestaurant);

  I.seeElement('.form-review form');
  const reviewText = 'E2E testing for Review';
  I.fillField('inputName', 'Refiandi Reza');
  I.fillField('inputReview', reviewText);

  I.click('#submit-review');

  const lastReview = locate('.review-body').last();
  const newReviewText = await I.grabTextFrom(lastReview);

  assert.strictEqual(reviewText, newReviewText);
});
