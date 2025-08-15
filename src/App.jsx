import { useState } from 'react';
import { sampleText } from './data';

import './App.css';
import Header from './components/Header';
import ModeCard from './components/ModeCard';
import SpeedReader from './components/SpeedReader';
import Footer from './components/Footer';

function App() {
  const [screen, setScreen] = useState('home');
  let content = '';
  if (screen === 'test') {
    content = (
      <SpeedReader
        text={sampleText}
        title="Test Mode"
        onDone={() => setScreen('home')}
      />
    );
  } else if (screen === 'train') {
    content = (
      <SpeedReader
        text={''}
        title="Train Mode"
        onDone={() => setScreen('home')}
      />
    );
  } else {
    content = (
      <div>
        <div className="py-10 flex flex-col gap-5 ">
          <div className="text-4xl font-semibold">
            Read Faster, level up and have fun!
          </div>
          <div className="">
            Pick a mod and start your speed reading journey!
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-5 justify-center items-center">
          <ModeCard
            emoji="⏱️"
            title="Test Mode"
            description="Check your reading speed and comprehension."
            variant="green"
            onStart={() => setScreen('test')}
          ></ModeCard>
          <ModeCard
            emoji="📚"
            title="Train Mode"
            description="Practice with custom texts at your pace."
            variant="yellow"
            comingSoon={false}
            onStart={() => setScreen('train')}
          ></ModeCard>
          <ModeCard
            emoji="🎮"
            title="Game Mode"
            description="Complete challenges and earn rewards."
            variant="blue"
            comingSoon={true}
            onStart={() => {}}
          ></ModeCard>
        </div>
      </div>
    );
  }
  {
  }
  return (
    <>
      <div className="min-h-screen  px-4 py-6">
        <Header
          onBackHome={() => {
            setScreen('home');
          }}
        ></Header>
        {/* hero */}

        {content}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
