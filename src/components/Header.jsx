// Header.jsx

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Header() {
    return (
        <div>
            <h1 className="text-8xl custom-grad pb-1 font-syne font-bold leading-none">Athan Zhang</h1>
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
                speed={10}
                repeat={Infinity}
                className="pb-10 text-2xl text-primary font-dm font-bold"
            />
        </div>
    )
}

export default Header
