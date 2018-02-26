import React from 'react';

import '../css/ListenerButton.css';

class ListenerButton extends React.Component {
  state = {
    show: false,
  };

  async componentDidMount() {
    const { init } = await import('../lib/listener');

    init();
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div
            className="component"
            data-path-start="M280,466c0,0.13-0.001,0.26-0.003,0.39c-0.002,0.134-0.004,0.266-0.007,0.396
	C279.572,482.992,266.307,496,250,496h-2.125H51.625H50c-16.316,0-29.592-13.029-29.99-29.249c-0.003-0.13-0.006-0.261-0.007-0.393
	C20.001,466.239,20,466.119,20,466l0,0c0-0.141,0.001-0.281,0.003-0.422C20.228,449.206,33.573,436,50,436h1.625h196.25H250
	c16.438,0,29.787,13.222,29.997,29.608C279.999,465.738,280,465.869,280,466L280,466z"
            data-path-listen="M181,466c0,0.13-0.001,0.26-0.003,0.39c-0.002,0.134-0.004,0.266-0.007,0.396
	C180.572,482.992,167.307,496,151,496h-2.125h2.75H150c-16.316,0-29.592-13.029-29.99-29.249c-0.003-0.13-0.006-0.261-0.007-0.393
	C120.001,466.239,120,466.119,120,466l0,0c0-0.141,0.001-0.281,0.003-0.422C120.228,449.206,133.573,436,150,436h1.625h-2.75H151
	c16.438,0,29.787,13.222,29.997,29.608C180.999,465.738,181,465.869,181,466L181,466z"
            data-path-player="M290,40c0,0.13-0.001,380.26-0.003,380.39c-0.002,0.134,0.006,24.479,0.003,24.609 c0,3.095-2.562,5.001-5,5.001h-27.125H41.625H15c-1.875,0-5-1.25-5-5.001c-0.003-0.13,0.004-24.509,0.003-24.641 C10.001,420.239,10,40.119,10,40l0,0c0-0.141-0.002-24.859,0-25c0,0,0-5,5-5h26.625h216.25H285c2.438,0,5,1.906,5,5 C290.002,15.13,290,39.869,290,40L290,40z">
            {/* SVG with morphing paths and initial start button shape */}
            <svg className="morpher" width={300} height={500}>
              <path
                className="morph__button"
                d="M280,466c0,0.13-0.001,0.26-0.003,0.39c-0.002,0.134-0.004,0.266-0.007,0.396
	C279.572,482.992,266.307,496,250,496h-2.125H51.625H50c-16.316,0-29.592-13.029-29.99-29.249c-0.003-0.13-0.006-0.261-0.007-0.393
	C20.001,466.239,20,466.119,20,466l0,0c0-0.141,0.001-0.281,0.003-0.422C20.228,449.206,33.573,436,50,436h1.625h196.25H250
	c16.438,0,29.787,13.222,29.997,29.608C279.999,465.738,280,465.869,280,466L280,466z"
              />
            </svg>
            {/* Initial start button that switches into the recording button */}
            <button className="button button--start">
              <span className="button__content button__content--start">
                Say something
              </span>
              <span className="button__content button__content--listen">
                <span className="icon icon--microphone" />
              </span>
            </button>
            {/* Music player */}
            <div className="player player--hidden">
              <button className="button button--close">
                <span className="icon icon--cross" />
              </button>
            </div>
            {/* /player */}
          </div>
          {/* /component */}
        </div>
        {/* /content */}
      </div>
    );
  }
}

export default ListenerButton;
