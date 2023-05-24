import { CoffeeDojoLogo } from 'components/logo'
import { IgSmallPic } from 'components/ig-pic'

function PicSubStrip({ passRef, transform, children }: any): JSX.Element {
  return (
    <div
      className="flex flex-col items-center absolute mx-auto px-4 sm:px-6 lg:px-8"
      style={{ transform }}
      ref={passRef}
    >
      {children}
    </div>
  )
}

export default function PicStrip({
  refs,
  opacity,
  picStripH,
  yOffsetValue,
  mainIgFeed,
  addPicStripArr,
  backgroundTriggerPoint,
  backgroundTriggerCallback
}): JSX.Element {
  return (
    <div
      ref={elem => {
        refs.current.picStrip = elem
      }}
      className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8"
      style={{ opacity, transition: 'opacity 1500ms linear' }}
    >
      <PicSubStrip
        passRef={elem => {
          refs.current.picStripContainerRef = elem
        }}
        key="pic-strip-0"
        transform={`translate3d(0px, ${picStripH * -0 + yOffsetValue}px, 0px)`}
      >
        {mainIgFeed?.map((url, _i) =>
          url === 0 ? (
            <CoffeeDojoLogo
              passRef={elem => {
                if (_i === 11) {
                  refs.current.secToLastLogoRef = elem
                } else if (_i === 15) {
                  refs.current.lastLogoRef = elem
                } else return undefined
              }}
              key={`sub-pic-strip-0-${_i}`}
            />
          ) : url === 1 ? (
            <CoffeeDojoLogo key={`sub-pic-strip-0-${_i}`} />
          ) : (_i + 1) % 2 === 0 ? (
            <IgSmallPic key={`sub-pic-strip-0-${_i}`} src={url} />
          ) : (
            <IgSmallPic key={`sub-pic-strip-0-${_i}`} src={url} />
          )
        )}
      </PicSubStrip>

      {addPicStripArr.map((subPicStripArr, i) => (
        <PicSubStrip
          key={`pic-strip-${i + 1}`}
          transform={`translateY(${picStripH * -(i + 1) + yOffsetValue}px)`}
        >
          {subPicStripArr?.map((url, _i) =>
            url === 0 ? (
              <CoffeeDojoLogo key={`sub-pic-strip-${i + 1}-${_i}`} />
            ) : url === 1 ? (
              <CoffeeDojoLogo key={`sub-pic-strip-${i + 1}-${_i}`} />
            ) : (_i + 1) % 2 === 0 ? (
              <IgSmallPic key={`sub-pic-strip-0-${_i}`} src={url} />
            ) : (
              <IgSmallPic key={`sub-pic-strip-0-${_i}`} src={url} />
            )
          )}
        </PicSubStrip>
      ))}
    </div>
  )
}
