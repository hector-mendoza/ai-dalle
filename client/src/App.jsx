import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center 
      bg-gray-800 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to='/'>
          <div className="flex items-center space-x-3 text-white font-medium">
            <span className="text-lg">Héctor Mendoza</span> <span className="sep">|</span> <img src={logo} alt="Logo" className="w-28 object-contain invert" />
          </div>
        </Link>

        <Link to='/create-post' className="font-inter font-medium bg-[#FFF]
        text-[#6469ff] px-4 py-2 rounded-md hover:text-[#FFF] hover:bg-[#6469ff] transition-all">
          Create an Image
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe]
      min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;