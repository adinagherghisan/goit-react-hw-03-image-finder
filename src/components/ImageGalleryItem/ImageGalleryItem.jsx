import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => (
  <li className={styles.galleryItem}>
    <img
      src={webformatURL}
      alt=""
      className={styles.image}
      onClick={() => onImageClick(largeImageURL)}
    />
  </li>
);
 
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
