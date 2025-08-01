import './App.css'
import {motion} from 'framer-motion'


const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    }
  }
}

const item = {
  hidden:{opacity: 0, y:50},
  show: {opacity: 1, y: 0}
}

const boxStyle = (color) => ({
  width: 100,
  height: 100,
  backgroundColor: color,
  borderRadius: 20,
  cursor: 'pointer'
})


function App() {

  return (
    <div style={{display: 'grid', placeItems:'center', height:'100vh',}}>

      <motion.div
      initial = {{opacity: 0, y: -200}}
      animate = {{opacity: 1, y: 0}}
      whileHover={{scale: 1.5}}
      whileTap={{scale: 1.1}}
      transition={{duration: 0.9}}


      style={{width: 150, height: 150, backgroundColor: 'blue', borderRadius: 20, cursor: 'pointer', marginBottom: 20}}>

      </motion.div>

      <motion.div
      initial = {{scale: 0, rotate : 0}}
      animate = {{scale: 1, rotate: 360}}
      whileHover={{scale: 1.5}}
      whileTap={{scale: 1.1}}
      transition={{duration: 3}}


      style={{width: 150, height: 150, backgroundColor: 'red', borderRadius: 20, cursor: 'pointer', marginBottom: 20}}>

      </motion.div>

      <motion.div
      initial = {{y: -200}}
      animate = {{y: 0}}
      transition={{type: 'spring', stiffness:100}}


      style={{width: 150, height: 150, backgroundColor: 'orange', borderRadius: 20, cursor: 'pointer', marginBottom: 20}}>

      </motion.div>

      <motion.div
      style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', height:'100vh'}}
      variants={container}
      initial = 'hidden'
      animate = 'show'>

        <motion.div variants={item} style={boxStyle('blue')} />
        <motion.div variants={item} style={boxStyle('red')} />
        <motion.div variants={item} style={boxStyle('green')} />

      </motion.div>
      

    </div>
  )
}

export default App
