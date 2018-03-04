import React, { Component } from 'react';
import Word from './Word';
import ListenerButton from './ListenerButton';

import {
  SpeechRecognition,
  SpeechGrammarList,
  SpeechRecognitionEvent,
} from '../lib/Speech';

import '../css/App.css';

class App extends Component {
  state = {
    show: false,
    text: "Sorry, can't hear",
  };

  async componentDidMount() {
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'ko-KR';
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

    this.recognition.onend = () => {
      console.log('end');

      this.end();

      // setTimeout(() => {
      //   this.setState({
      //     show: false,
      //   });
      // }, 10000);
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

  render() {
    return (
      <main className="demo-1">
        {this.state.show ? (
          <Word text={this.state.text} />
        ) : (
          <ListenerButton onStart={this.start} onEnd={this.end} />
        )}
      </main>
    );
  }
}

export default App;
