// App.jsx

import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ContentPanel from './components/ContentPanel';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background p-5 w-screen min-h-screen 
                      sm:h-screen">
        <div className="border border-primary p-5 h-full w-full">
          <div className="h-full 
                          flex flex-col
                          sm:grid sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="align-center 
                            sm:align-start sm:col-span-1">
              <Header />
              <NavBar />
            </div>
            <div className="flex-grow sm:col-span-1 lg:col-span-2 sm:overflow-y-scroll sm:max-h-full no-scrollbar">
              <ContentPanel />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
