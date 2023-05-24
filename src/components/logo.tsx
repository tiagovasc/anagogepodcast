import cn from 'classnames'

import logoPng from 'assets/images/coffee-dojo-logo.png'

export function CoffeeDojoLogo({ passRef = undefined }: any): JSX.Element {
  return (
    <div
      ref={passRef}
      className={cn(
        'my-[10px] overflow-hidden',
        'w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] md:w-[125px] md:h-[125px]'
      )}
    >
      <img alt="Coffee Dojo" src={logoPng} />
    </div>
  )
}

export function CoffeeDojoLogoSmall(): JSX.Element {
  return (
    <div
      className={cn(
        'my-[10px] overflow-hidden',
        'w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[75px] md:h-[75px]'
      )}
    >
      <img alt="Coffee Dojo" src={logoPng} />
    </div>
  )
}
