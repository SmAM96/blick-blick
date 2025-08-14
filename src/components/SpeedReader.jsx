import { useState, useEffect } from 'react';

export default function SpeedReader({ text, wpm = 200, onDone }) {
  const words = text.split(' ');
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [customWpm, setCustomWpm] = useState(wpm);

  // interval in ms for each word
  const interval = 60000 / customWpm;
  const progress = ((index + 1) / words.length) * 100;

  useEffect(() => {
    let timer;
    if (isPlaying && index < words.length) {
      timer = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, interval);
    } else if (index >= words.length) {
      setIsPlaying(false);
      setIsDone(true);
    }
    return () => clearInterval(timer);
  }, [isPlaying, index, words.length, interval, customWpm]);

  return (
    <div className="h-200 flex flex-col gap-8 items-center justify-center mt-10 bg-gray-50">
      {/* Progress Bar */}
      <div className="w-full max-w-xl mb-8">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Words */}
      <div className="text-5xl font-bold mb-8">
        {isDone ? 'Test Complete! ✅' : words[index]}{' '}
      </div>
      {/* wpm slider */}
      <div className="flex flex-col items-center justify-center mt-10 gap-6">
        <h2 className="text-2xl font-bold">Set your speed</h2>

        {/* Slider */}
        <input
          type="range"
          min="100"
          max="800"
          step="10"
          value={customWpm}
          onChange={(e) => setCustomWpm(Number(e.target.value))}
          className="w-64"
        />

        {/* Value display */}
        <div className="text-lg font-medium">{customWpm} WPM</div>
      </div>
      {/* Buttons */}
      <div className="flex gap-4">
        {!isDone && (
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-400 transition"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        )}
        <button
          onClick={() => {
            setIndex(0);
            setIsDone(false);
            setIsPlaying(false);
          }}
          className="px-6 py-3 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition"
        >
          Restart
        </button>
        <button
          onClick={onDone}
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-300 transition"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
