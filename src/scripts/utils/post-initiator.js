import RestaurantSource from '../data/restaurant-source.js';

const PostReview = async (url, name, review) => {
  const inputDataReview = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurantReview(inputDataReview);

  const container = document.querySelector('.detail-review');
  const date = new Date().toLocaleDateString('id-Id', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newPostReview = `
    <div class="detail-review-item">
        <div class="review-header">
            <p class="review-name"><i class="fas fa-user-circle"></i> ${name}</p>
            <p class="review-date">${date}</p>
        </div>
        <div class="review-body">
            <p>${review}</p>
        </div>
    </div>
  `;
  container.innerHTML += newPostReview;
};

export default PostReview;
