import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Modal = ({ date, isModalOpen, toggleModal }) => {
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
        <div className={`fixed inset-0 ${isModalOpen ? "flex" : "hidden"} items-center justify-center z-30`}>
            <div className='w-11/12 max-w-5xl text-slate-950 bg-slate-100'>
                <div className='bg-green-700/90 relative'>
                    <button 
                        onClick={toggleModal}
                        className='absolute right-0 top-0 text-white hover:bg-red-500 p-2 mr-2 mt-2'
                    >
                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </button>
                    <h3 className='text-center p-10 text-2xl xl:text-3xl text-white'>Buy Tickets for {date} show</h3>
                </div>
               
                <form onSubmit={onSubmit} className='p-4'>
                    <div className='flex flex-col gap-y-2 mb-3'>
                        <label htmlFor="name">Tickets, $15 per person<span aria-hidden>*</span></label>
                        <input 
                            className='bg-blue-400/20 rounded-sm p-3 outline-0 border-2 border-transparent focus-within:border-blue-700'
                            id='name'
                            placeholder='How many?'
                            type='number'
                            name='number'
                            required
                        />
                    </div>
                    <div className='flex flex-col  gap-y-2'>
                        <label htmlFor='email'>Send To<span aria-hidden>*</span></label>
                        <input 
                        className='bg-blue-400/20 p-3 outline-0 border-2 border-transparent focus-within:border-blue-700'
                            id='email'
                            placeholder='johnkind@company.gmail'
                            type='email'
                            name='email'
                            required
                        />
                    </div>
                    <button 
                        className='bg-blue-500
                                     text-white 
                                     p-3 rounded-md my-5
                                    hover:bg-slate-950
                                     active:bg-slate-950
                                     transition-all
                                     duration-100
                                     ease-in'
                    >Pay for ticket
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal