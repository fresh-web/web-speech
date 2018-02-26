export const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition;
export const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
export const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
export const isSupportRecognition = () => !!SpeechRecognition;
export const isSupportGrammerList = () => !!SpeechGrammarList;
