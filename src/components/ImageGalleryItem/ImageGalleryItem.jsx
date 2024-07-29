import propTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({  webformatURL, largeImageURL, tags, onClickImage, }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onClickImage(largeImageURL);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  webformatURL: propTypes.string.isRequired,
  onClickImage: propTypes.func,
};