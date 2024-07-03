import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import styles from './index.css'
import axios from 'axios';

const API_KEY = '42449548-3afe96e5baf687cb33b4d7101'; 
const BASE_URL = 'https://pixabay.com/api/';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}`, {
          params: {
            q: query,
            page: page,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
          },
        });
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = url => {
    setLargeImageURL(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
    </div>
  );
};

export default App;
