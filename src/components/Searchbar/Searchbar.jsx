import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';




export class Searchbar extends Component {
  render() {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={this.props.onSubmit}>
        
        <input
          className={style.SearchForm__input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={style.SearchForm__button}>
          <span >Search</span>
        </button>
      </form>
    </header>
  );
  }
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};