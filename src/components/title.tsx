import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import cn from 'classnames'

import { CoffeeDojoLogo, CoffeeDojoLogoSmall } from 'components/logo'

export function PrimaryTitle({ city, motionKey, zIndex }): JSX.Element {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  const linkProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: () => {
      localStorage.setItem('kohi-dojo-first-visit', JSON.stringify(false))
      navigate(`/${city?.toLowerCase()}`)
    },
    cursor: 'pointer',
    css: hovered
      ? `text-decoration: underline; text-underline-offset: 6px;`
      : ``
  }

  return (
    <div
      className="w-full h-full flex fixed justify-center items-center"
      style={{ zIndex }}
    >
      <div className="flex w-full justify-center items-center hover:underline cursor-pointer decoration-white">
        <h1
          {...linkProps}
          className={cn(
            'w-[40%] text-white drop-shadow-xl text-right font-bold',
            'tracking-3 sm:tracking-6 md:tracking-8',
            'font-[0.8em] sm:font-[1.25em] md:font-[1.5em]'
          )}
          style={{
            textShadow:
              '-5px -1px 25px #00000055, 5px -1px 25px #00000055, -5px 1px 25px #00000055, 5px 1px 25px #00000055'
          }}
        >
          <motion.div
            key={motionKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3.5,
              times: [0, 0.2, 0.8, 1]
            }}
          >
            <a>COFFEE DOJO</a>
          </motion.div>
        </h1>
        <motion.div
          key={motionKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.9, 1]
          }}
        >
          <a {...linkProps}>
            <CoffeeDojoLogo />
          </a>
        </motion.div>
        <h1
          {...linkProps}
          className={cn(
            'w-[40%] text-white font-bold',
            'pl-[3px] sm:pl-[6px] md:pl-[8px]',
            'tracking-3 sm:tracking-6 md:tracking-8',
            'font-[0.8em] sm:font-[1.25em] md:font-[1.5em]'
          )}
          style={{
            textShadow:
              '-5px -1px 25px #00000055, 5px -1px 25px #00000055, -5px 1px 25px #00000055, 5px 1px 25px #00000055'
          }}
        >
          <motion.div
            key={motionKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3.5,
              times: [0, 0.2, 0.8, 1]
            }}
          >
            <a>{(city || '').toUpperCase()}</a>
          </motion.div>
        </h1>
      </div>
    </div>
  )
}

export function SecondaryTitle({ city }): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <h1
        className={cn(
          'text-right font-bold',
          'tracking-3 sm:tracking-6 md:tracking-8',
          'font-[0.8em] sm:font-[0.9em] md:font-[1em]'
        )}
      >
        <a>COFFEE DOJO</a>
      </h1>
      <a>
        <CoffeeDojoLogoSmall />
      </a>
      <h1
        className={cn(
          'text-right font-bold',
          'pl-[3px] sm:pl-[6px] md:pl-[8px]',
          'tracking-3 sm:tracking-6 md:tracking-8',
          'font-[0.8em] sm:font-[0.9em] md:font-[1em]'
        )}
      >
        <a>{(city || '').toUpperCase()}</a>
      </h1>
    </div>
  )
}
