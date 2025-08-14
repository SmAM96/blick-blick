import logo from '../assets/logo.png';

function Header() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Blick-Blick Logo" className="w-15 h-15" />
        <div>
          <div className="text-left text-xl font-bold text-gray-800">
            Blick-Blick
          </div>
          <div className="text-left text-sm text-gray-500 ">
            Speed Reading Companion
          </div>
        </div>
      </div>
      <button
        disabled
        className="disabled rounded-full bg-yellow-400 text-gray-800 px-6 py-2 font-semibold hover:bg-yellow-100 transition"
      >
        Login
      </button>
    </div>
  );
}

export default Header;
