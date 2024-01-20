// Home.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        // <div className="flex items-center justify-center h-full">
        //     <div className="grid grid-cols-2 gap-4 h-full aspect-square">
        //         <div className="aspect-square border-4 border-secondary rounded-3xl p-4">
        //             <img src="/pfp2.png" alt="A Picture of Me!" className="w-full h-full object-cover rounded-3xl"/>
        //         </div>
        //         <div className="aspect-square border-4 border-secondary rounded-3xl p-4">
                    // <p className="text-lg font-dm">
                    //     Working to expand the domain of computation. I'm based 
                    //     in the greater New York and Washington D.C. areas and 
                    //     am currently studying at Princeton University 🐅. I have 
                    //     interests in artificial intelligence, quantum computing,
                    //     and optimization. 
                    //     <br />
                    //     <br />
                    //     In some shape or form, I've been working on these goals
                    //     since I was 15 years old. 
                    // </p>
        //         </div>
        //         <div className="aspect-square border-4 border-secondary rounded-3xl p-4">c</div>
        //         <div className="aspect-square border-4 border-secondary rounded-3xl p-4">d</div>
        //     </div>
        // </div>

        <motion.div 
            className="flex flex-col sm:flex-row items-center sm:justify-center h-full w-full"
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <img src="/pfp2.png" alt="A Picture of Me!" className="sm:w-1/2 sm:h-3/4 sm:object-cover"/>
            <div className="m-8 sm:w-1/4">
                <p className="text-xl font-dm">
                    <span className="font-bold font-syne text-secondary text-6xl">
                        Who?
                    </span>
                    <br />
                    <br />
                    Working to expand the domain of computation. I'm based 
                    in the greater New York and Washington D.C. areas and 
                    am currently studying at Princeton University. I have 
                    interests in artificial intelligence, quantum computing,
                    and optimization. 
                    <br />
                    <br />
                    <span className="font-bold">
                    In some shape or form, I've been working on these goals
                    since I was 15 years old. 
                    </span>
                </p>
            </div>
        </motion.div>
    )
}

export default Home