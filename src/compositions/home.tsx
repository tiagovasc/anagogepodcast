import { BsChevronDoubleDown } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import ToggleThemeButton from 'components/theme-toggle-button'
import Blur from 'components/blur'
import Post from 'components/post'

import googlePodcostIcon from 'assets/images/google-podcast.png'
import applePodcostIcon from 'assets/images/apple-podcast.png'
import anagogeDarkIcon from 'assets/images/anagoge-dark.png'
import spotifyIcon from 'assets/images/spotify.png'
import youtubeIcon from 'assets/images/youtube.png'
import anagogeIcon from 'assets/images/anagoge.png'

import { posts } from 'utils/posts'

export default function Home() {
  const scrollCountRef = useRef(0)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (hasScrolled)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }

    const handleScroll = () => {
      scrollCountRef.current += 1

      if (scrollCountRef.current >= 2) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  useEffect(() => {
    if (hasScrolled) {
      const element: any = document.getElementById('first-post')
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [hasScrolled])

  return (
    <main className="w-screen p-4 pb-12">
      <article className="responsive w-full h-screen flex flex-col items-center justify-center">
        <div>
          <img src={anagogeIcon} className="block dark:hidden w-60" />
          <img src={anagogeDarkIcon} className="hidden dark:block w-60" />
        </div>
        <div className="flex gap-4 justify-between">
          <a href="https://podcasts.apple.com/si/podcast/anagoge-podcast/id1512482918?ign-mpt=uo%3D4">
            <img src={applePodcostIcon} className="w-8" />
          </a>
          <a href="https://open.spotify.com/show/4ifa95kknLrUQblYTUMQ7T">
            <img src={spotifyIcon} className="w-8" />
          </a>
          <a href="https://www.youtube.com/channel/UCH4eOgbF9-O_HSFx-oBOySw">
            <img src={youtubeIcon} className="w-8" />
          </a>
          <a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmFnb2dlLmxpYnN5bi5jb20vcnNz">
            <img src={googlePodcostIcon} className="w-8" />
          </a>
        </div>
        <motion.div
          className="absolute bottom-10 text-2xl text-black dark:text-white"
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          exit={{ y: 0 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 0.6 }}
        >
          <BsChevronDoubleDown />
        </motion.div>
        <div className="absolute bottom-10 right-10">
          <ToggleThemeButton />
        </div>
      </article>
      <article className="text-black dark:text-white w-full flex flex-col items-center justify-center mx-auto gap-12">
        {posts.map((post, index) => (
          <Post post={post} index={index} number={posts.length - index} />
        ))}
      </article>
      <Blur />
    </main>
  )
}
