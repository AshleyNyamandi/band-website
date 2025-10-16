import SaleBtn from './SaleBtn'

export default function Concert({ img, venue, date, description }) {
    return (
        <div className='bg-slate-50 text-slate-950 basis-full max-w-56 mx-auto shrink-0 pb-2 border-2 shadow-amber-50 rounded-sm'>
            <div className='w-full  h-40 hover:opacity-50'>
                <img className='w-full h-full object-cover object-center' src={img} alt={venue}/>
            </div>
            <div className='flex flex-col justify-center gap-y-4 p-4'>
                <span className='font-semibold text-red-950 text-[1.1rem]'>{venue}</span>
                <span>{date}</span>
                <p className='italic font-extralight'>{description}</p>
                <SaleBtn />
            </div>
        </div>
    )
}