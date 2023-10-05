import { FC } from 'react'
import { raleway } from '~/pages'

const Navbar = ({ }) => {
    return (
        <div className="flex gap-20 items-center">
            <img src="./logo.svg" alt="logo" className='w-[80px] h-45' />
            <ul className={`${raleway.variable}` + ' flex font-raleway gap-5'}>
                <li className='text-xs'>Features</li>
                <li className='text-xs'>Team</li>
                <li className='text-xs'>Sign In</li>
            </ul>
        </div >
    )
}

export default Navbar