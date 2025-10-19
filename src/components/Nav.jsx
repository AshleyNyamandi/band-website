import { Link} from 'react-scroll'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Nav() {
    let menuToggleIcon = ''

    const [isMenuOpen, setMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setMenuOpen(preMenuOpen => !preMenuOpen)
    }
    menuToggleIcon = isMenuOpen ? <FontAwesomeIcon icon="fa-solid fa-x" /> : <FontAwesomeIcon icon="fa-solid fa-bars" />

    return (
        <nav className='w-full bg-stone-900 text-slate-100 h-14'>
            <div className='h-full flex justify-between items-center w-full max-w-8xl mx-auto relative'>
                <div className='w-max lg:ml-7 sm:text-4xl text-green-500'>
                    <a className=' font-medium pl-4'><span><FontAwesomeIcon icon="fa-solid fa-globe" /></span>NYMD</a>
                </div>
                <div className={`w-full max-sm:absolute bg-stone-900 flex flex-col  flex-1 items-center transition-transform duration-500 ease-in z-10
                        ${ isMenuOpen ? '-translate-y-[0] top-14' : '-translate-y-[150%]'} sm:top-0 sm:translate-y-0 sm:w-auto`}>
                    <ul className='sm:flex gap-5 lg:gap-20 items-center justify-center'>
                        <li className='mb-3 py-3 sm:pb-0 lg:text-2xl hover:text-red-500 transition-colors duration-300 cursor-pointer'>
                            <Link onClick={toggleMobileMenu}  to='home'>HOME</Link>
                        </li>
                        <li className='mb-3 py-3 sm:pb-0 lg:text-2xl hover:text-red-500 transition-colors duration-300 cursor-pointer'>
                            <Link onClick={toggleMobileMenu} to='band'>BAND</Link>
                        </li>
                        <li className='mb-3 py-3 sm:pb-0 lg:text-2xl hover:text-red-500 transition-colors duration-300 cursor-pointer'>
                            <Link onClick={toggleMobileMenu} to='tour'>TOUR</Link>
                        </li>
                        <li className='mb-3 py-3 sm:pb-0 lg:text-2xl hover:text-red-500 transition-colors duration-300 cursor-pointer'>
                            <Link onClick={toggleMobileMenu} to='contact'>CONTACT</Link>
                        </li>
                        {/* DOPDOWN MENU */}
                        <li className='pb-3 sm:pb-0 sm:relative group' tabIndex={0}>
                                <div className='hover:text-red-500 transition-colors duration-300 flex gap-4 items-center cursor-pointer py-3 lg:text-2xl'>MORE<span className='group-hover:rotate-180 group-focus:rotate-180 transition-transform duration-300'><FontAwesomeIcon icon="fa-solid fa-caret-down" /></span>
                                </div>
                                <ul className='max-h-0 overflow-hidden group-hover:max-h-96 group-focus:max-h-96 transition-[max-height,top] duration-700 ease-in-out flex flex-col text-start ml-8 sm:absolute bg-slate-950 top-15 group-hover:top-12 z-10'>
                                    <li 
                                        className='py-1 px-3 hover:bg-slate-300 hover:text-slate-950 transition-colors duration-300 lg:text-lg cursor-pointer'
                                    >
                                        <a>Merchandise</a>
                                    </li>
                                    <li 
                                        className='py-1 px-3 hover:bg-slate-300 hover:text-slate-950 transition-colors duration-300 lg:text-lg cursor-pointer'
                                    >
                                        <a>Extras</a>
                                    </li>
                                    <li 
                                        className='py-1 px-3 hover:bg-slate-300 hover:text-slate-950 transition-colors duration-300 lg:text-lg cursor-pointer'
                                    >
                                        <a>Media</a>
                                    </li>       
                                </ul>
                        </li>
                    </ul>
                </div>
                    <div className='pr-4 sm:hidden'>
                        <button aria-expanded={isMenuOpen} className='rounded-sm hover:bg-slate-100 hover:text-slate-900 py-1 px-2 transition-all duration-100 text-xl' onClick={toggleMobileMenu}>{menuToggleIcon}</button>
                    </div>
            </div>
        </nav>
    )
}