export default function SaleBtn({ toggleModal }) {
    return (
        <button 
            className='bg-slate-950 text-slate-50 p-2 max-w-fit hover:bg-slate-300 hover:text-slate-950 active:bg-slate-300  active:text-slate-950 focus:bg-slate-300 focus:text-slate-950 rounded-sm'
            onClick={toggleModal}
        >Buy Tickets
        </button>
    )
}