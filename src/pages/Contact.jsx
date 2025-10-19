import Container from '../components/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Contact() {
    return (
        <section id='contact' className='text-lg lg:text-2xl lg:font-light'>
            <div className='w-full max-w-6xl mx-auto    '>
                <div className='text-center'>
                    <h3 className='pb-4 text-3xl font-bold'>Contact</h3>
                    <span className='italic font-extralight block pb-4'>Fan? Drop a note!</span>
                </div>
                <div className='sm:flex sm:justify-between items-center gap-5 mb-5'>
                    <div className='mb-3 p-3 rounded-sm grow-1 shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
                        <address className='flex gap-4 mb-4'>
                            <span className='text-2xl'><FontAwesomeIcon icon="fa-solid fa-location-dot" /></span>
                            <span>Bulawayo, Zimbabwe</span>
                        </address>

                        <div className='flex gap-4 mb-4'>
                            <span className='text-2xl'><FontAwesomeIcon icon="fa-solid fa-phone" /></span>
                            <span> Phone: +263 777 979 235</span>
                        </div>
                        <div className='flex gap-4'>
                            <span className='text-2xl'><FontAwesomeIcon icon="fa-solid fa-envelope" /></span>
                            <span> Email: nyamandiashley@gmail.com</span>
                        </div>
                    </div>
                    <form className='grow-2 p-3 rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='name'>Full Name<span aria-hidden="true">*</span></label>
                            <input
                                className='border-2 border-black focus:border-4 rounded-sm px-2 py-1'
                                type='text'
                                id='name'
                                placeholder='Tatenda Mhofu'
                                required
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='email'>Email<span aria-hidden="true">*</span></label>
                            <input className='border-2 border-black focus:border-4 rounded-sm px-2 py-1'
                                type='email'
                                id='email'
                                placeholder='johndoe@company.com'
                                required
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='message'>Message<span aria-hidden="true">*</span></label>
                            <textarea 
                                className='border-2 border-black focus:border-4 rounded-sm px-2 py-1 resize-none w-full h-24'
                                id='message' 
                                placeholder='What is on your mind?'
                                required>
                            </textarea>
                        </div>

                        <button type='submit' className='bg-slate-950 text-slate-50 py-2 px-4 max-w-fit hover:bg-slate-300 hover:text-slate-950 active:bg-slate-300  active:text-slate-950 focus:bg-slate-300 focus:text-slate-950 rounded-sm mt-3 sm:text-2xl'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}