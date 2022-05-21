import CONFIG from '../../globals/config.js';

const createRestaurantItemTemplate = (item) => `
    <article class="card restaurant-list" tabindex="0" id="${item.id}">    
        <div class="card-img">
            <img tabindex="0"
            class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + item.pictureId}" alt="${item.name}">
            <div class="img-overlay"></div>
            <div tabindex="0" class="rating"><i class="fas fa-star"></i> ${item.rating}</div>  
            
        </div>
        <div class="card-content">
            <h2 class="card-title"><a class="test" tabindex="0" href="${`/#/detail/${item.id}`}">${item.name}</a></h2>    
            <h2 tabindex="0" class="card-location"><i class="fas fa-map-marked-alt"></i> ${item.city}</h2>
            <p tabindex="0" class="card-desc">${item.description}</p>
            <p tabindex="0" class="card-likes"><i class="fas fa-heart"></i><span> ${item.like}</span> people favorite this</p>
        </div>
    </article>
`;

const createRestaurantDetailTemplate = (item) => `
    <div class="container">    
        <h1 tabindex= "0" class="title">${item.name}</h1>
        <div class="line"></div>
                
        <div class="wrapper">
            <article class="detail-restaurant">
                <div class="detail-img">
                    <img class="img-poster" loading="lazy" src="${CONFIG.BASE_IMAGE_URL + item.pictureId}" alt="${item.name}" />
                    <div class="img-overlay"></div>
                </div>
                <div tabindex= "0" class="detail-content">
                    <h2 class="detail-city">
                        <i class="fas fa-map-marked-alt"></i> ${item.city}
                    </h2>
                    <h2 class="detail-address">
                        <i class="fas fa-road"></i> ${item.address}
                    </h2>
                    <h2 class="detail-categories">Categories: ${item.categories.map((category) => `<span class"category"> ${category.name}</span>`)} </h2>
                    <h2 class="detail-rating">Rating: ${item.rating} <i class="fas fa-star"></i></h2>
                </div>
                <div class="menu">
                    <div tabindex= "0" class="menu-food">
                        <h2><i class="fas fa-drumstick-bite"></i> Food Menu:</h2>
                        <ul>
                            ${item.menus.foods.map((food) => `
                            <li>${food.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div tabindex= "0" class="menu-drink">
                        <h2><i class="fas fa-coffee"></i> Drink Menu:</h2>
                        <ul>
                            ${item.menus.drinks.map((drink) => `
                            <li>${drink.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="detail-description">
                    <h2>Overview</h2>
                    <p tabindex= "0">${item.description}</p>
                </div>
                <div class="detail-review-wrapper">
                    <h2>Reviews</h2>
                    <div class="detail-review">
                        ${item.customerReviews
    .map(
      (data) => `
                            <div tabindex= "0" class="detail-review-item">
                                <div class="review-header">
                                    <p class="review-name"><i class="fas fa-user-circle"></i> ${data.name}</p>
                                    <p class="review-date">${data.date}</p>
                                </div>
                                <div class="review-body">
                                    <p>${data.review}</p>
                                </div>
                            </div>
                            `,
    )
    .join('')}
                        </div>
                </div>
                
            </article>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button tabindex= "0" aria-label="like this restaurant" id="likeButton" class="like" >
     <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex= "0" aria-label="unlike this restaurant" style="color:#EC5858;" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
