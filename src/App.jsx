// App.jsx

import React from 'react'
import Header from './components/Header';
import NavBar from './components/NavBar';
import ContentPanel from './components/ContentPanel';

function App() {
  return (
    <div className="bg-background p-5 min-h-screen sm:h-screen w-full">
      <div className="flex border-2 border-primary p-5 h-[95vh] sm:h-full w-auto">
        <div className="h-full 
                        flex flex-col
                        sm:grid sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="align-center 
                          sm:align-start sm:col-span-1">
            <Header />
            <NavBar />
          </div>
          <div className="flex-grow sm:col-span-1 lg:col-span-2 sm:overflow-y-scroll max-h-full no-scrollbar">
            <ContentPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
