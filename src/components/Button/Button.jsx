import propTypes from 'prop-types';
import  style  from './Button.module.css';
import { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <div className={style.button_container}><button
        type="button"
        className={style.button_load}
        onClick={this.props.onNextPage}
      >
        Load more
      </button></div>
      
    );
  }
}

Button.propTypes = {
  onNextPage: propTypes.func,
};