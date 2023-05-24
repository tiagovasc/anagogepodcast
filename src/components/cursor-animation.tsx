import { FaMousePointer, FaHandPointer } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const cursorStyle = {
  color: '#cc9900',
  fontSize: 20,
  stroke: 'black',
  strokeWidth: 20,
  transform: 'translate3d(100px, 30px, 0px'
}

export default function CursorAnim(): JSX.Element {
  const [pointed, setPointed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPointed(true)
    }, 1500)
  }, [])

  return (
    <div className="flex fixed w-full h-full justify-center items-center">
      <motion.div
        initial={{ x: 200, y: 200, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          ease: 'easeOut'
        }}
      >
        {pointed ? (
          <FaHandPointer style={cursorStyle} />
        ) : (
          <FaMousePointer style={cursorStyle} />
        )}
      </motion.div>
    </div>
  )
}
