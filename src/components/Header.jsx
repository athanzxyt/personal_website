// Header.jsx

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Header() {
    return (
        <div className="text-center 
                        sm:text-start">
            <h1 className="font-syne font-bold custom-grad
                           text-7xl leading-tight pb-2
                           sm:text-8xl sm:leading-tight sm:pb-5">Athan Zhang</h1>
            <TypeAnimation
                sequence={[
                    'I am a Developer',
                    2000,
                    'I am a  Scientist',
                    2000,
                    'I am a Builder',
                    2000,
                ]}
                wrapper="div"
                speed={5}
                repeat={Infinity}
                className="text-lg text-primary font-dm font-bold sm:text-2xl"
            />
        </div>
    )
}

export default Header
