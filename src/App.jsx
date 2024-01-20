// App.jsx

import React from 'react'
import Header from './components/Header';
import NavBar from './components/NavBar';
import ContentPanel from './components/ContentPanel';

function App() {
  return (
    <div className="bg-background p-5 w-screen h-screen min-h-screen">
      <div className="border-2 border-primary p-5 h-full w-auto pb-10 sm:pb-0">
        <div className="h-full 
                        flex flex-col
                        sm:grid sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="align-center 
                          sm:align-start sm:col-span-1">
            <Header />
            <NavBar />
          </div>
          <div className="flex-grow sm:col-span-1 lg:col-span-2 overflow-y-scroll max-h-full no-scrollbar">
            <ContentPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
