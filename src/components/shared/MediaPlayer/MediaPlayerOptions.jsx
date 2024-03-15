import { IconVolumeCross, IconVolumeLoud } from '@/components/base/Icons'

export const MediaPlayerOptions = ({
   track,
   muteTrackVolume,
   loudTrackVolume,
   trackDuration,
   trackProgress,
   onChangeTrackTime,
   afterChangeTrackTime
}) => (
   <div className="media-player__options">
      <div className="media-player__options-item media-player__volume">
         <button
            className="focusable"
            type="button"
            onClick={muteTrackVolume}
         >
            <IconVolumeCross />
         </button>

         <input
            className="focusable"
            type="range"
            step={1}
            min={0}
            max={100}
         />

         <button
            className="focusable"
            type="button"
            onClick={loudTrackVolume}
         >
            <IconVolumeLoud />
         </button>
      </div>

      <div className="media-player__options-item media-player__name">
         <h1>{track.title}</h1>
         <p>{track.artist}</p>
      </div>

      <div className="media-player__options-item media-player__track">
         <input
            className="focusable"
            type="range"
            step={1}
            min={0}
            max={trackDuration}
            value={trackProgress}
            onChange={onChangeTrackTime}
            onMouseUp={afterChangeTrackTime}
            onKeyUp={afterChangeTrackTime}
         />
      </div>
   </div>
)
