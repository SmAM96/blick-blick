import React from 'react';

function Footer() {
  return (
    <div>
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
            Words appear at your set speed, keep up!
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
        © {new Date().getFullYear()} Blick-Blick - Speed Reading Companion
      </footer>
    </div>
  );
}

export default Footer;
