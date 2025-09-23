import React from 'react'
import animalone from "/src/assets/baby-monkey-4888534.jpg";
import animaltwo from "/src/assets/dolphin-4509296.jpg";
import animalthree from "/src/assets/goose-3477674.jpg";
import animalfour from "/src/assets/squirrel-5791050.jpg";
import animalfive from '/src/assets/fly-8125379.jpg'
import Navbar from '../NavbarPage/Navbar';

const animaImage = [
  {id: 1, image: animalone, alt: 'baby monkey', heading: "Nature Work"},
  {id: 2, image: animaltwo, alt: "dolphin" , heading: "Winged Tango"},
  {id: 3, image: animalthree, alt: "goose" , heading: "Art Studio"},
  {id: 4, image: animalfour, alt: "squirrel" , heading: "CheerFully Nutty"},
  {id: 4, image: animalfive, alt: "Fly" , heading: "Nova & Orion"},
]

const Hero = () => {
  return (
    <div className='relative'>
      {/* maping our image */}


      {animaImage.map((img) =>
      <div  key={img.id}>
        <img src= {img.image} alt={img.alt} className='relativ object-cover brightness-75'/>
        <h1 className=' text-black'>{img.heading}</h1>
      </div>
        )}

        <Navbar />
        
     
    </div>
  )
}

export default Hero
