import React, {useState} from 'react';
import * as ms from 'microsoft-cognitiveservices-speech-sdk';

const VoiceRecoginition = () => {
	const [text, setText] = useState('');

	const startRecognition = () => {
		// TODO-key 값은 bash_profile에 안전하게 보관할 것
		const speechConfig = ms.SpeechConfig.fromSubscription('ddb46aa6e7ee483e9e9da5affdf9f76b', 'koreacentral');
		const audioConfig = ms.AudioConfig.fromDefaultMicrophoneInput();
		speechConfig.speechRecognitionLanguage = 'en-US';

		let recognizer = new ms.SpeechRecognizer(speechConfig, audioConfig);

		recognizer.recognizeOnceAsync(
			(result) => {
				setText(prevText => prevText + result.text);
				console.log(result);

				recognizer.close();
				recognizer = undefined;
			},
			(err) => {
				console.log(err);

				recognizer.close();
				recognizer = undefined;
			});
	};

	return (
		<div>
			<p>MS Voice Recognition.</p>
			<button onClick={startRecognition}>Start Recognition</button>
			<textarea cols="30" rows="10" placeholder="this is description" readOnly={true} value="value">{text}</textarea>
		</div>
	);
};


export default VoiceRecoginition;
