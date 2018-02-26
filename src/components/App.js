import React, { Component } from 'react';
import Word from './Word';
import ListenerButton from './ListenerButton';

import {
  SpeechRecognition,
  SpeechGrammarList,
  SpeechRecognitionEvent,
} from '../lib/Speech';

class App extends Component {
  state = {
    show: false,
  };

  async componentDidMount() {
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'ko-KR';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    console.log('this.recognition', this.recognition);

    this.recognition.onresult = event => {
      console.log('event.results', event.results);
    };

    this.recognition.onspeechend = () => {
      console.log('stopped');
      this.recognition.stop();
    };

    this.recognition.onnomatch = event => {
      console.log('no match');
    };

    setTimeout(() => {
      this.setState({ show: true });
    }, 10000);
  }

  start = () => {
    console.log('start');
    this.recognition.start();
  };

  stop = () => {
    console.log('stop');
    this.recognition.stop();
  };

  render() {
    return this.state.show ? (
      <Word onStart={this.start} onStop={this.stop} />
    ) : (
      <ListenerButton />
    );
  }
}

export default App;
