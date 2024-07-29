import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchImages } from './API/PixabayApi';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Notify } from 'notiflix';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [showBtn, setShowBtn] = useState(true); 

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.search.value);
    setLoading(true);
    setImages([]);
    setPage(1);
  };

  const onNextPage = () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
  };

  const onClickImage = url => {
    setShowModal(true);
    setLargeImage(url);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImage('');
  };

  useEffect(() => {
    if (!query) return;

    const fetchGallery = async () => {
      try {
        const response = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...response]);
        if (response.length < 12) {
          setShowBtn(false);
        } else {
          setShowBtn(true);
        }
        if (response.length === 0) {
          Notify.failure('No matches found!');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [query, page]);

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} onClickImage={onClickImage} />
      {loading && <Loader />}
      {showBtn && <Button onNextPage={onNextPage} />}
      {showModal && <Modal largeImageURL={largeImage} onModalClose={onModalClose} />}
    </div>
  );
};