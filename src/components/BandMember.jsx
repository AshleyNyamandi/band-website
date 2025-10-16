export default function BandMember({ name, img, alt }) {
    return (
        <div className='shrink-0'>
            <span className='block pb-3 text-center text-red-950 font-medium sm:text-lg'aria-hidden='true'>{name}</span> 
            <div className='w-36 h-62 overflow-hidden opacity-80 outline-0 rounded-2xl'>
                <img className='w-full h-full object-cover object-center' src={img} alt={alt} />
            </div>
        </div>
    )
}