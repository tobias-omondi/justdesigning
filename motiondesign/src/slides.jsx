import React from 'react'
import {motion} from 'framer-motion'

const images = [
'  https://media.architecturaldigest.com/photos/5ba551bb44966b64d8d5fc2b/16:9/w_2560%2Cc_limit/hyper-blue-4.jpg',
'https://media.istockphoto.com/id/1250408731/photo/close-up-of-a-blue-hydrangea.jpg?s=612x612&w=0&k=20&c=dpoLBC14P5zuslcpZg7jqIOce8wBZG3urfXpI0Ld-d8=',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6IxzyiEhrSAcTZE6GUz-PR8PWA8uXajC0MIvwtrNb3Q4IO74fzi0FPpJE3vKczOaWdA&usqp=CAU',
]

const slides = () => {
  return (
    <div style={{overflow: 'hidden', padding: 40}}>
      <h1>Swiper</h1>
      <motion.div
      drag = 'x'
      dragConstraints = {{left: -1200, right: 0}}
      style={{
        display: 'flex',
        gap:'20',
        cursor: 'grab'
      }}>
        {images.map((src, i) =>(
          <motion.img key={i} src={src}
          whileHover={{scale:1.1}} whileTap={{scale: 0.95}} transition={{type: 'spring', stiffness:300}}
          style={{
            width: 300, height: 200, objectFit: 'cover', borderRadius: 20,  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
          }}
          />
        ))}

      </motion.div>
    </div>
  )
}

export default slides
