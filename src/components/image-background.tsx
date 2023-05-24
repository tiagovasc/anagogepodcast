export default function ImageBackground({
  passRef,
  opacity,
  transition,
  background
}): JSX.Element {
  return (
    <div
      className="fixed w-full h-full z-[-1] brightness-50"
      style={{ opacity, transition, background, backgroundSize: 'cover' }}
      ref={passRef}
    />
  )
}
