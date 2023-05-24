import { motion } from 'framer-motion'
import { useEffect } from 'react'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
}

export default function Layout({ children, title }): JSX.Element {
  useEffect(() => {
    if (title) document.title = title + ' - Coffee Dojo'
    else document.title = 'Coffee Dojo'
  }, [title])

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.article>
  )
}
