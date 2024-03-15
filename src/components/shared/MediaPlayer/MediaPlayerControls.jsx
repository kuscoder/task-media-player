import { IconPauseStream, IconRewindBack, IconRewindNext } from '@/components/base/Icons'

export const MediaPlayerControls = ({ isPlaying, toggleTrackPlaying, toPrevTrack, toNextTrack }) => (
   <div className="media-player__controls">
      <button
         className="focusable media-player__controls-btn"
         type="button"
         onClick={toPrevTrack}
      >
         <IconRewindBack />
      </button>

      <button
         className="focusable media-player__controls-btn"
         type="button"
         onClick={toggleTrackPlaying}
      >
         <IconPauseStream fill={isPlaying} />
      </button>

      <button
         className="focusable media-player__controls-btn"
         type="button"
         onClick={toNextTrack}
      >
         <IconRewindNext />
      </button>
   </div>
)
