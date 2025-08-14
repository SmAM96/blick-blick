import React from 'react';

function ModeCard({
  emoji,
  title,
  description,
  variant = 'green',
  onStart,
  comingSoon = false,
}) {
  const grad =
    variant === 'green'
      ? 'from-emerald-400 to-emerald-500'
      : variant === 'yellow'
      ? 'from-amber-300 to-amber-400'
      : 'from-sky-400 to-sky-500';

  return (
    <div
      className={`relative  group rounded-3xl h-60 p-[1px] w-full sm:w-80 bg-gradient-to-r text-left ${grad} shadow-md hover:scale-105 hover:shadow-lg
`}
    >
      <div className="rounded-3xl bg-white p-6 h-full flex flex-col">
        <div className="text-3xl">{emoji}</div>
        <h3 className="mt-4 text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-auto">
          <button
            onClick={onStart}
            className="px-6 py-2 justify-self-end rounded-full bg-green-500 text-white font-medium hover:bg-green-400 transition"
          >
            Start
          </button>
        </div>
      </div>
      {/* Coming Soon Overlay */}
      {comingSoon && (
        <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-70 transition">
          <span className="text-white text-lg font-semibold">
            Coming Soon 🚧
          </span>
        </div>
      )}
    </div>
  );
}

export default ModeCard;
