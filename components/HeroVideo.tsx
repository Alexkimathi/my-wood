'use client'
import { useEffect, useRef, useState } from 'react'

const HERO_VIDEOS = [
  'https://assets.mixkit.co/videos/24732/24732-720.mp4',
  'https://videos.pexels.com/video-files/3723661/3723661-hd_2048_1080_24fps.mp4',
  'https://videos.pexels.com/video-files/3723667/3723667-hd_2048_1080_24fps.mp4',
  'https://videos.pexels.com/video-files/3723666/3723666-hd_2048_1080_24fps.mp4',
  'https://assets.mixkit.co/videos/34496/34496-1080.mp4',
  'https://videos.pexels.com/video-files/3723668/3723668-hd_2048_1080_24fps.mp4',
  'https://videos.pexels.com/video-files/3723665/3723665-hd_2048_1080_24fps.mp4',
]

const CLIP_DURATION = 10000

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function nextVideo() {
    const vid = videoRef.current
    if (!vid) return
    clearTimeout(timerRef.current ?? undefined)
    vid.style.opacity = '0'
    setTimeout(() => {
      setIndex(prev => (prev + 1) % HERO_VIDEOS.length)
    }, 600)
  }

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    vid.src = HERO_VIDEOS[index]

    function onCanPlay() {
      if (!videoRef.current) return
      videoRef.current.style.opacity = '1'
      videoRef.current.play().catch(() => {})
      clearTimeout(timerRef.current ?? undefined)
      timerRef.current = setTimeout(nextVideo, CLIP_DURATION)
    }

    vid.addEventListener('canplay', onCanPlay)
    vid.addEventListener('ended', nextVideo)
    vid.addEventListener('error', nextVideo)

    return () => {
      vid.removeEventListener('canplay', onCanPlay)
      vid.removeEventListener('ended', nextVideo)
      vid.removeEventListener('error', nextVideo)
      clearTimeout(timerRef.current ?? undefined)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <video
      ref={videoRef}
      className="hero-bg-video"
      autoPlay
      muted
      playsInline
      poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      style={{ opacity: 0 }}
    />
  )
}
