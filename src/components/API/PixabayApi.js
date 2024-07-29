import axios from 'axios';

export const fetchImages = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    method: 'get',
    params: {
      key: '45178875-32da1f77bc846f3475731a3a6',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return response.data.hits;
};