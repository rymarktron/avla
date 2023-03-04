import Head from 'next/head'
import Link from 'next/link'

import { DemoLayout } from '@/components/DemoLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

//For Azure Text to Speech API
import { useState } from 'react';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

export default function Demo() {
  //Use States used
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [text, setText] = useState('');
  const [gender, setGender] = useState('');
  const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.NEXT_PUBLIC_TEXT_TO_SPEECH_API_KEY, 'eastus');
  
  const synthesizeSpeech = () => {
    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>
                   <voice name='en-US-JacobNeural'>
                     ${text}
                   </voice>
                 </speak>`;
    const result = synthesizer.speakSsmlAsync(
      ssml,
      (event) => {
        if (event.name === 'start') {
          setIsSpeaking(true);
        } else if (event.name === 'end') {
          setIsSpeaking(false);
        }
      },
      (error) => {
        console.error(error);
        setIsSpeaking(false);
      }
    );
  };
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <DemoLayout>
        <div className="flex flex-col mt-8">
          <Link href="/" aria-label="Home">
            <Logo className="w-auto h-10" />
          </Link>
          <div className="flex mt-4 -my-1 text-sm font-medium gap-x-6">
            <p class="text-slate-800">Your Personal <span class="text-purple-800">Visual</span> <span class="text-pink-400">Learning</span> <span class="text-blue-600">Learning</span> <span class="text-orange-600">Assistant</span></p>
          </div>
          
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              Welcome. Enter a prompt and we will generate some questions.
            </h2>

          </div>
        </div>
        <form action="#" className="grid grid-cols-1 mt-10 gap-y-8">
        <TextField
            label="Prompt"
            id="prompt"
            name="prompt"
            type="text"
            autoComplete="prompt"
            required
            value={text}
            onChange={handleTextChange}
          />
        </form>

        <div className="pt-4 col-span-full">
            <Button
              type="submit"
              variant="solid"
              class="bg-orange-500 hover:bg-pink-500 focus:bg-pink-500 text-white font-bold py-2 px-4 rounded-full"
              className="w-full"
              onClick={synthesizeSpeech} 
              disabled={isSpeaking}
            >
              {isSpeaking ? 'Speaking...' : 'Speak'}
            </Button>
        </div>
      </DemoLayout>
    </>
  )
}
