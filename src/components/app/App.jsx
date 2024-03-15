import { useQuery } from 'react-query'
import { tracksService } from '@/services/tracks.service'
import { MediaPlayer } from '@/components/shared/MediaPlayer'
import './App.styles.scss'

export const App = () => {
   const { data } = useQuery('tracks', tracksService.fetchTracks)

   return (
      <main className="app-page">
         {!data && <p>Loading...</p>}
         {!!data && <MediaPlayer tracks={data} />}
      </main>
   )
}
