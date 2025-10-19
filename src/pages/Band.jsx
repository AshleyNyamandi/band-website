import { BandMembers } from '../data'
import BandMember from '../components/BandMember'
import Container from '../components/Container'

export default function Band() {
    return (
        <section id='band'>
            <Container>
                <h1 className='text-center font-black text-3xl sm:text-4xl pb-2'>NYMD BAND</h1>
                <span className='block text-center pb-3 italic font-extralight text-xs' >We love music</span>
                <p className='text-lg 2xl:text-xl font-extralight tracking-wider'>We are Zimbabwe's premier band, proudly weaving the vibrant threads of our rich cultural heritage into soulful music that resonates with both the young and the elderly. Hailing from the heart of Zimbabwe, our melodies draw inspiration from the rhythms, stories, and traditions of our people, blending traditional sounds with contemporary flair to create a unique and timeless musical experience. As the number one band in Zimbabwe, we have captured the hearts of audiences across generations with our heartfelt performances and authentic storytelling. Our music celebrates the wisdom of our elders and the boundless energy of our youth, uniting communities through the universal language of song. Our mission is to share the spirit of Zimbabwe with the world. From the vibrant streets of Harare to stages across Africa and beyond, we aim to spread our cultural legacy, fostering connection and pride through every note we play. Join us on this journey as we bring Zimbabwe’s soul to the global stage!!</p>

                <h2 className='text-center font-black text-2xl lg:text-3xl pb-2 mt-4'>Band Members</h2>
                <div className='pt-14 flex flex-wrap justify-center gap-x-12 gap-y-10'>
                    {BandMembers.map(member => (
                        <BandMember
                            key={member.id}
                            name={member.name}
                            img={member.img}
                            alt={member.alt}
                        />
                    ))}
                </div>
            </Container>

        </section>
    )
}