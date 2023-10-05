import { FC } from 'react'
import { opensans, raleway } from '~/pages'

const Hero = ({ }) => {
    return (
        <div className='flex flex-col gap-8 items-center'>
            <div>
                <img src="./illustration-intro.png" alt="intro" />
            </div>
            <div className='flex flex-col gap-4 '>
                <h1 className={`${raleway.variable} ` + 'font-raleway font-bold text-2xl text-white text-center'}>All your files in one secure location, accessible anywhere.</h1>
                <p className={`${opensans.variable} ` + 'font-opensans text-sm/[21px] text-white text-center'}>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            </div>
            <div className={`${raleway.variable} ` + 'font-raleway bg-gradient-to-br from-cyan to-robin rounded-[24px] py-4 text-white text-sm font-bold flex items-center justify-center w-[240px] h-12'}>Get Started</div>
            <div>

            </div>
        </div>
    )
}

export default Hero