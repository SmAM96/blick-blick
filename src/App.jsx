import { useState } from 'react';
import { sampleText } from './data';

import './App.css';
import Header from './components/Header';
import ModeCard from './components/ModeCard';
import SpeedReader from './components/SpeedReader';

function App() {
  const [screen, setScreen] = useState('home');
  let content = '';
  if (screen === 'test') {
    content = (
      <SpeedReader
        text={sampleText}
        // wpm={500}
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
        <div className="mt-8 flex gap-5 justify-center">
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
            comingSoon={true}
            onStart={() => {}}
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
        <Header></Header>
        {/* hero */}

        {content}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-bold text-lg mb-2">1. Choose a Mode</h4>
            <p className="text-gray-500">
              Pick a test, training, or game challenge.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">2. Start Reading</h4>
            <p className="text-gray-500">
              Words appear at your set speed — keep up!
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">3. Improve Skills</h4>
            <p className="text-gray-500">
              Track your progress and push for higher WPM.
            </p>
          </div>
        </div>
        <footer className="mt-20 py-6 bg-green-50 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Blick-Blick — Speed Reading Companion
        </footer>
      </div>
    </>
  );
}

export default App;
