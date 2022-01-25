import CONFIG from './config.js';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  Detail: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
