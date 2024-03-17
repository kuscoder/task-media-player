import { useQuery } from 'react-query'
import { tracksService } from '@/services/tracks.service'
import { MediaPlayer } from '@/components/MediaPlayer'
import background from '@/assets/background.png'
import './App.styles.scss'

export const App = () => {
   const { data } = useQuery('tracks', tracksService.fetchTracks)

   return (
      <main className="app-page">
         <div className="app-page__background">
            <img
               src={background}
               alt="background"
            />
         </div>

         {!data && <p>Loading...</p>}
         {!!data && <MediaPlayer tracks={data} />}
      </main>
   )
}
