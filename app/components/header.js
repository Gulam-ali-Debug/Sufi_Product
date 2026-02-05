'use client';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-[#e6e6e6]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Expanded header height */}
        <div className="flex h-28 items-center justify-between">
          
          {/* Logo Only */}
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center border border-black/50">
              {/* Logo only, no text */}
            </div>
          </div>

          {/* Navigation Items - Centered */}
          <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center space-x-10">
              <li>
                <a 
                  href="#" 
                  className="text-black/90 hover:text-black transition-colors duration-300 font-bold tracking-wide text-sm uppercase"
                >
                  <span className="font-bold">Collections</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-black/90 hover:text-black transition-colors duration-300 font-bold tracking-wide text-sm uppercase"
                >
                  <span className="font-bold">Essences</span>
                </a>
              </li>
              <li className="relative">
                {/* Decorative element for center */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-transparent via-black to-transparent" />
                <a 
                  href="#" 
                  className="text-black hover:text-black/70 transition-colors duration-300 font-serif text-lg tracking-widest font-bold"
                >
                  <span className="font-bold">ATTAR</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-black/90 hover:text-black transition-colors duration-300 font-bold tracking-wide text-sm uppercase"
                >
                  <span className="font-bold">Heritage</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-black/90 hover:text-black transition-colors duration-300 font-bold tracking-wide text-sm uppercase"
                >
                  <span className="font-bold">Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <button className="text-black/90 hover:text-black transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-black/90 hover:text-black transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="relative text-black/90 hover:text-black transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-xs flex items-center justify-center text-white border border-black/50 font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;