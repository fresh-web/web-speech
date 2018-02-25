import React, { Component } from 'react';
import Main from './Main';
import ListenerButton from './ListenerButton';
import {
  SpeechRecognition,
  SpeechGrammarList,
  SpeechRecognitionEvent,
} from './speech';
import './App.css';

class App extends Component {
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
    return (
      <div className="demo-1">
        <ListenerButton />
        {/* <Main onStart={this.start} onStop={this.stop} /> */}
      </div>
    );
  }
}

export default App;
