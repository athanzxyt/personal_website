// App.jsx

import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ContentPanel from './components/ContentPanel';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-background p-5">
        <div className="bg-background border-primary border h-full w-full p-5 pb-0">
          <div className="flex flex-col h-full overflow-hidden sm:grid sm:gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="sm:col-span-1">
              <Header />
              <NavBar />
            </div>
            <div className="flex-grow sm:col-span-1 md:col-span-2 lg:col-span-3 overflow-y-scroll max-h-full no-scrollbar">
              <ContentPanel />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
