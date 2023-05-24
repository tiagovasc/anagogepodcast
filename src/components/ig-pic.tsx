import { AspectRatio } from '@chakra-ui/react'
import cn from 'classnames'

export function IgGridPic({ src }): JSX.Element {
  return (
    <AspectRatio ratio={10 / 11} overflow="hidden">
      <iframe src={src + 'embed'} width={'105%'} />
    </AspectRatio>
  )
}

export function IgSmallPic({ src }): JSX.Element {
  return (
    <div
      className={cn(
        'my-[10px] overflow-hidden',
        'w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] md:w-[125px] md:h-[125px]'
      )}
    >
      <iframe
        src={src + 'embed'}
        width={'105%'}
        height={204}
        style={{ marginTop: -56 }}
        tabIndex={-1}
      />
    </div>
  )
}
