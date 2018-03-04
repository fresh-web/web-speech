import React from 'react';

import Slideshow from '../lib/Slideshow';

import '../css/Word.css';

class Word extends React.Component {
  state = {
    number: 1,
  };

  componentDidMount() {
    this.setState(
      {
        number: Math.floor(Math.random() * 9) + 1,
      },
      () => {
        const slideshow = new Slideshow(document.querySelector('.slideshow'));
      }
    );
  }

  render() {
    const { number } = this.state;
    const { text } = this.props;

    return (
      <div className="slideshow">
        <a className="button close" onClick={this.props.onClose}>
          <svg
            fill="#fff"
            height="40"
            width="40"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </a>
        <div className="slide slide--current">
          <div className={`slide__bg slide__bg--${number}`} />
          <h2 className={`word word--${number}`}>{text}</h2>
        </div>
      </div>
    );
  }
}

Word.defaultProps = {
  text: '',
};

export default Word;
