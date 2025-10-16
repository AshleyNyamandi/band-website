import {useState, useEffect } from "react";
import {heroImages as images} from '../data'
 
export default function Header() {
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000)
  
      return () => clearInterval(interval)
    }, [])
  
    return (
      <figure className="w-full relative"> 
          <img className="w-full h-auto" src={images[currentImageIndex].img} alt={images[currentImageIndex].alt} />
          <figcaption className="flex flex-col items-center absolute bottom-6 right-0 left-0 mx-auto text-white font-bolder">
              <span>{images[currentImageIndex].location}</span>
              <span>{images[currentImageIndex].message}</span>
          </figcaption>
      </figure>
    )

}