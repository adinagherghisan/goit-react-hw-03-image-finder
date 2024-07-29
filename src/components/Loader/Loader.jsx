import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import  style  from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <ColorRing
        visible={true}
        height={80}
        width={80}
        ariaLabel="blocks-loading"
        className={style.blocks_wrapper}
        color="#000" 
      />
    </div>
  );
};