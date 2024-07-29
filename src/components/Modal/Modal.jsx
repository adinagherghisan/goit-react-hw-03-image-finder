import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

export const Modal = ({ onModalClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27 || e.currentTarget === e.target) {
        return onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  return (
    <div className={style.Overlay} onClick={onModalClose}>
      <div className={style.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};