// Home.jsx

import React from 'react'

function Home() {
    return (
        <div className="grid max-w-[300px] sm:relative">            
            <div>
                <img src="src/assets/pfp2.png" alt="A Picture of Me!" />
            </div>
            <div>
                <p className="text-md sm:pr-10 sm:absolute sm:bottom-0 font-dm">
                    Working to expand the domain of computation. I'm based 
                    in the greater New York and Washington D.C. areas and 
                    am currently studying at Princeton University 🐅. I have 
                    interests in artificial intelligence, quantum computing,
                    and optimization. 
                    <br />
                    <br />
                    In some shape or form, I've been working on these goals
                    since I was 15 years old. 
                </p>
                
            </div>
        </div>
    )
}

export default Home