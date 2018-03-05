import React, { Component } from 'react';
import Word from './Word';
import ListenerButton from './ListenerButton';

import '../css/App.css';

class App extends Component {
  state = {
    show: false,
    listening: false,
    text: "Sorry, can't hear",
  };

  componentDidMount() {
    const Recognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!Recognition) {
      alert(
        'Speech Recognition API is not supported in this browser, try chrome'
      );
      return;
    }

    this.recognition = new Recognition();
    this.recognition.lang = process.env.REACT_APP_LANGUAGE || 'en-US';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = event => {
      const text = event.results[0][0].transcript;

      console.log('transcript', text);
      this.setState({ text });
    };

    this.recognition.onspeechend = () => {
      console.log('stopped');

      this.setState({ show: true });
    };

    this.recognition.onnomatch = event => {
      console.log('no match');
      this.setState({ text: "Sorry, can't hear" });
    };

    this.recognition.onstart = () => {
      this.setState({
        listening: true,
      });
    };

    this.recognition.onend = () => {
      console.log('end');

      this.setState({
        listening: false,
      });

      this.end();
    };

    this.recognition.onerror = event => {
      console.log('error', event);

      this.setState({
        show: true,
        text: event.error,
      });
    };
  }

  start = () => {
    this.recognition.start();
  };

  end = () => {
    this.recognition.stop();
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main className="demo-1">
        {this.state.show ? (
          <Word text={this.state.text} onClose={this.handleClose} />
        ) : (
          <ListenerButton
            onStart={this.start}
            onEnd={this.end}
            disabled={this.state.listening}
            buttonText={
              this.state.listening ? 'Listening...' : 'Click me to listen'
            }
          />
        )}
      </main>
    );
  }
}

export default App;
