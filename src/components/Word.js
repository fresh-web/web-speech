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
      <main className="demo-1">
        <div className="content">
          <div className="slideshow">
            <div className="slide slide--current">
              <div className={`slide__bg slide__bg--${number}`} />
              <h2 className={`word word--${number}`}>{text}</h2>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Word.defaultProps = {
  text: 'wonderland',
};

export default Word;
