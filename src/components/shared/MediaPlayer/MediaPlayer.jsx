import { useState, useRef, useEffect } from 'react'
import { MediaPlayerControls } from './MediaPlayerControls'
import { MediaPlayerOptions } from './MediaPlayerOptions'
import './MediaPlayer.styles.scss'

export const MediaPlayer = ({ tracks }) => {
   const [trackIndex, setTrackIndex] = useState(0)
   const [trackProgress, setTrackProgress] = useState(0)
   const [isPlaying, setIsPlaying] = useState(false)
   const track = tracks[trackIndex]

   const audioRef = useRef(new Audio(track.audioSrc))
   const intervalRef = useRef()
   const isReady = useRef(false)

   // Play\Pause
   const toggleTrackPlaying = () => {
      setIsPlaying((state) => !state)
   }

   // To previus track
   const toPrevTrack = () => {
      setTrackIndex(() => (trackIndex - 1 < 0 ? tracks.length - 1 : trackIndex - 1))
   }

   // To next track
   const toNextTrack = () => {
      setTrackIndex(() => (trackIndex < tracks.length - 1 ? trackIndex + 1 : 0))
   }

   // Mute volume
   const muteTrackVolume = () => {}

   // Set volume on max
   const loudTrackVolume = () => {}

   // Update progress bar and auto play next track
   const startTimer = () => {
      clearInterval(intervalRef.current)

      intervalRef.current = setInterval(() => {
         if (audioRef.current.ended) {
            toNextTrack()
         } else {
            setTrackProgress(audioRef.current.currentTime)
         }
      }, [1000])
   }

   // Change track time
   const changeTrackTime = (value) => {
      clearInterval(intervalRef.current)
      audioRef.current.currentTime = value
      setTrackProgress(audioRef.current.currentTime)
   }

   // Play and setup track after change track time
   const startAfterChangeTrackTime = () => {
      if (!isPlaying) setIsPlaying(true)
      startTimer()
   }

   // Play and pause track
   useEffect(() => {
      if (isPlaying) {
         audioRef.current.play()
         startTimer()
      } else {
         clearInterval(intervalRef.current)
         audioRef.current.pause()
      }
   }, [isPlaying])

   // Handle setup when changing tracks
   useEffect(() => {
      audioRef.current.pause()
      audioRef.current = new Audio(track.audioSrc)
      setTrackProgress(audioRef.current.currentTime)

      if (isReady.current) {
         audioRef.current.play()
         setIsPlaying(true)
         startTimer()
      } else {
         isReady.current = true
      }
   }, [trackIndex])

   // Pause and clean up on unmount
   useEffect(() => {
      return () => {
         audioRef.current.pause()
         clearInterval(intervalRef.current)
      }
   }, [])

   return (
      <div className="media-player">
         <MediaPlayerControls
            isPlaying={isPlaying}
            toggleTrackPlaying={toggleTrackPlaying}
            toPrevTrack={toPrevTrack}
            toNextTrack={toNextTrack}
         />

         <MediaPlayerOptions
            track={track}
            muteTrackVolume={muteTrackVolume}
            loudTrackVolume={loudTrackVolume}
            trackDuration={audioRef.current.duration ? audioRef.current.duration : `${audioRef.current.duration}`}
            trackProgress={trackProgress}
            onChangeTrackTime={(e) => changeTrackTime(e.target.value)}
            afterChangeTrackTime={startAfterChangeTrackTime}
         />

         <div className="media-player__cover">
            <img
               src={track.coverSrc}
               alt={track.title}
            />
         </div>
      </div>
   )
}
