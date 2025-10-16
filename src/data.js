import { v4 as uuidv4 } from 'uuid';
import chicago from '/chicago.jpg'
import la from '/la.jpg'
import ny from '/ny.jpg'
import ashley3 from '/ashley3.jpeg'
import ashley1 from  '/ashley1.jpeg'
import ashley2 from '/ashley2.jpeg'
import bulawayo from '/bulawayo.jpeg'
import kadoma from '/Kadoma.jpg'
import mutare from '/mutare.jpg'

export const heroImages = [
      {img:chicago,
        alt: 'chicago concert ',
        location: 'Chicago',
        message:'The atmosphere in New York was electric!'
      },
      {img: la,
        alt: 'Los Angeles concert',
        location: 'Los Angeles',
        message:'We had the best time playing at Venice Beach!'
      },
      {img: ny,
        alt: 'New York concert',
        location: 'New York',
        message:'Thank you New York. A concert we will never forget!'
      }

    ];

export const BandMembers = [
    {
        img: ashley3,
        alt: 'Ashley Nyamamdi',
        name: 'Ashley Nyamandi',
        id: uuidv4()

    },
    {
        img: ashley1,
        alt: 'Ashley Nyamamdi',
        name: 'Ashley Nyamandi',
        id: uuidv4()

    },
    {
        img: ashley2,
        alt: 'Ashley Nyamamdi',
        name: 'Ashley Nyamandi',
        id: uuidv4()

    },
]

export const tickets = [
  {
    toursId: uuidv4(),
    month: 'September',
    ticketsLeft: 0,
  },
  {
    toursId: uuidv4(),
    month: 'October',
    ticketsLeft: 0,
  },
  {
    toursId: uuidv4(),
    month: 'November',
    ticketsLeft: 3,
  },

]

export const tours = [
  {
    tourId: uuidv4(),
    img: bulawayo,
    venue: 'Bulawayo',
    date: 'Thur, 27 Nov 2025',
    description: 'We promise you mabviravira'
  },
  {
    tourId: uuidv4(),
    img: kadoma,
    venue: 'Kadoma',
    date: 'Fri, 28 Nov 2025',
    description: 'We promise you mabviravira'

  },
  {
    tourId: uuidv4(),
    img: mutare,
    venue: 'Mutare',
    date: 'Sat, 29 Nov 2025',
    description: 'We promise you mabviravira'

  },
]