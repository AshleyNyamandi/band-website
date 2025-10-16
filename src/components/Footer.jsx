import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Footer() {
    return (
        <footer className='h-20 bg-slate-950 text-slate-50 flex flex-col gap-y-2 justify-center items-center'>
                <ul className='flex gap-x-2.5 sm:text-2xl'>
                    <li>
                        <a className='hover:text-red-500' href='https://www.facebook.com/share/16Mvh13AeA/?mibextid=wwXIfr' aria-label='View our facebook page'>
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-red-500' href='https://www.instagram.com/ash_nymd?igsh=MWtzbDAwOG9qOWdhZg%3D%3D&utm_source=qr aria' aria-label='View our instagram page'>
                            <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-red-500' href='https://x.com/ashley_nymd?s=21' aria-label='View our twitter page'>
                            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-red-500' href='https://www.linkedin.com/in/ashleynymd' aria-label='View our linkedin page'>
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-red-500' href='https://wa.me/message/V25G67CBYYTSI1' aria-label='View our whatsapp account'>
                            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </a>
                    </li>

                </ul>
                <div>
                    <span className='italic font-thin hover:underline text-sm'>Designed by <a href='#' aria-label="View Ashley's portfolio">Ashley</a></span>
                </div>
        </footer>
    )
}

