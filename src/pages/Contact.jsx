import { useState } from 'react'
import Container from '../components/Container'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Contact() {
        const [result, setResult] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        setResult("Sending...")

        const formData = new FormData(e.target)
        formData.append("access_key", "ac6c0fc1-6ab9-49d0-b336-3f574739398e")

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then(r => r.json())

        if (res.success) {
            setResult(res.message)
            e.target.reset()
        } else {
            setResult('Submission failed. Try again later')
            console.error('web3forms:', res)
        }
    }

    return (
        <section id='contact' className='text-lg lg:text-xl lg:font-light'>
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
                    <form onSubmit={onSubmit} className='grow-2 p-3 rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
                        <div className='flex flex-col mb-4'>
                            <label className='mb-2' htmlFor='name'>Full Name<span aria-hidden="true">*</span></label>
                            <input
                                className='border-2 border-black focus:border-4 rounded-sm px-2 py-1 text-base'
                                type='text'
                                id='name'
                                placeholder='Tatenda Mhofu'
                                required
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='mb-2' htmlFor='email'>Email<span aria-hidden="true">*</span></label>
                            <input className='border-2 border-black focus:border-4 rounded-sm px-2 py-1 text-base'
                                type='email'
                                id='email'
                                name='email'
                                placeholder='johndoe@company.com'
                                required
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='mb-2' htmlFor='message'>Message<span aria-hidden="true">*</span></label>
                            <textarea 
                                className='border-2 border-black focus:border-4 rounded-sm px-2 py-1 resize-none w-full h-24 text-base'
                                id='message' 
                                name='message'
                                placeholder='What is on your mind?'
                                required>
                            </textarea>
                        </div>

                        <button type='submit' className='bg-slate-950 text-slate-50 py-2 px-4 max-w-fit hover:bg-slate-300 hover:text-slate-950 active:bg-slate-300  active:text-slate-950 focus:bg-slate-300 focus:text-slate-950 rounded-sm mt-3 lg:text-2xl mr-6'>Send</button>
                        <span>{result}</span>
                    </form>
                </div>
            </div>
        </section>
    )
}