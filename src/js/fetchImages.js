"use strict"

export const fetchImages = async (inputValue, pageNr) => {
  return await fetch(
    `https://pixabay.com/api/?key=30394560-d0d404ca050f2eacb8eab858d&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
