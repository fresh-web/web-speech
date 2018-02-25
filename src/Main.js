import React from 'react';

import Slideshow from './Slideshow';

class Main extends React.Component {
  componentDidMount() {
    const slideshow = new Slideshow(document.querySelector('.slideshow'));
    document
      .querySelector('.slidenav__item--prev')
      .addEventListener('click', () => slideshow.show('prev'));
    document
      .querySelector('.slidenav__item--next')
      .addEventListener('click', () => slideshow.show('next'));
    document.addEventListener('keydown', ev => {
      const keyCode = ev.keyCode || ev.which;
      if (keyCode === 37) {
        slideshow.show('prev');
      } else if (keyCode === 39) {
        slideshow.show('next');
      }
    });
  }

  render() {
    return (
      <main>
        <div className="content">
          <div className="slideshow">
            <div className="slide slide--current">
              <div className="slide__bg slide__bg--1" />
              <h2 className="word word--1">서울 날씨 30</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--2" />
              <h2 className="word word--2">Aquarius</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--3" />
              <h2 className="word word--3">Lycanthropy</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--4" />
              <h2 className="word word--4">Wonderland</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--5" />
              <h2 className="word word--5">Something</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--6" />
              <h2 className="word word--6">Callipygian</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--7" />
              <h2 className="word word--7">Eviternity</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--8" />
              <h2 className="word word--8">Jumbuck</h2>
            </div>
            <div className="slide">
              <div className="slide__bg slide__bg--9" />
              <h2 className="word word--9">Babooner</h2>
            </div>
          </div>
          <nav className="slidenav">
            <button className="slidenav__item slidenav__item--prev">
              prev
            </button>
            <button className="slidenav__item slidenav__item--next">
              next
            </button>
          </nav>
        </div>
      </main>
    );
  }
}

export default Main;
