import { useState, useEffect } from 'react';

export default function SpeedReader({ text, onDone, title }) {
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState(text.split(/\s+/));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [customWpm, setCustomWpm] = useState(300);
  const [customText, setCustomText] = useState(text || '');

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

  const startFromCustomText = () => {
    if (customText.trim() === '') return;
    setWords(customText.trim().split(/\s+/));
    setIndex(0);
    setIsDone(false);
    setIsPlaying(true);
  };

  return (
    <div className="py-10 flex flex-col gap-8 items-center justify-center mt-10 bg-gray-50 rounded-4xl border-2">
      <h2 className="text-4xl font-semibold mb-10 ">{title}</h2>

      {/* Only show textarea in Train Mode */}
      {title === 'Train Mode' && !isPlaying && (
        <div className="w-full max-w-xl flex flex-col gap-4 ">
          <div className="relative w-full">
            <textarea
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Paste or write your text here..."
              className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none "
            />
            <button
              disabled
              className="disabled absolute bottom-2 right-1 px-3 py-1 text-sm rounded-md bg-blue-200 text-black-500 hover:bg-gray-300"
              title="Coming Soon 🚧"
            >
              🤖 Generate with AI
            </button>
          </div>

          <button
            onClick={startFromCustomText}
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-400 transition"
          >
            Start Reading
          </button>
        </div>
      )}

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
        {isDone ? 'Test Complete! ✅' : words[index]}
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
