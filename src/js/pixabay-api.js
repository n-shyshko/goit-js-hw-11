export function getImages(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45306533-f7c4428500ee3898e492b2a2f";
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      });
          return fetch(`${URL}?${params}`).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

