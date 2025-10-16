import { tickets, tours } from '../data'
import Container from '../components/Container'
import Concert from '../components/Concert'



export default function Tour() {
  return (
    <section id='tour' className='bg-slate-950 text-slate-50'>
        <Container>
            <div className='flex flex-col items-center gap-y-4 pb-4'>
                <h2 className='uppercase text-3xl font-bold'>Tour Dates</h2>
                <span className='italic font-light block pb-4'>Remember to buy your tickets</span>
            </div>

            <div className='bg-slate-50 text-slate-950 pb-6'>
                {tickets.map(ticket => (
                <div className='not-last:border-b-2 not-last:border-slate-300 py-2' key={ticket.toursId}>
                    <span className='pl-4 font-medium text-lg'>{ticket.month} tickets</span>
                    {ticket.ticketsLeft > 0 ? (
                    <span aria-label={`${ticket.ticketsLeft} left`} className='float-right mr-3 h-6 w-6 bg-slate-900 rounded-full text-slate-50 flex justify-center items-center'>{ticket.ticketsLeft}</span>
                    ) : (
                    <span className='inline-block bg-black py-1 px-2 text-slate-50 ml-3.5 text-[0.7rem]'>Sold out</span>
                    )}
                </div>
                ))}
            </div>
            <div className='mt-8 flex flex-wrap gap-4 justify-center'> 
                {tours.map(tour => (
                    <Concert 
                        key={tour.tourId}
                        img={tour.img}
                        venue={tour.venue}
                        date={tour.date}
                        description={tour.description}
                    />
                ))}
            </div>
        </Container>

    </section>
  );
}