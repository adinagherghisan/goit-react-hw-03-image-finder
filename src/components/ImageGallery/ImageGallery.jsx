import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <div>
      <ul className={style.ImageGallery}>
        {images.map(({ id, largeImageURL, tags, webformatURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL} 
              tags={tags}
              webformatURL={webformatURL} 
              onClickImage={onClickImage}
            />
          );
        })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      webformatURL: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
      largeImageURL: propTypes.string, 
    })
  ).isRequired,
  onClickImage: propTypes.func,
};