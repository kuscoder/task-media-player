export const tracksService = {
   async fetchTracks() {
      return [
         {
            title: 'Against All Odds',
            artist: 'Nick Petrov',
            coverSrc: 'https://cdn.bensound.com/image/cover/nickpetrov-pixeldreams-thumb.webp',
            audioSrc: 'https://cdn.bensound.com/bensound-againstallodds.mp3'
         },
         {
            title: 'Against All Odds 2',
            artist: 'Nick Petrov 2',
            coverSrc: 'https://cdn.bensound.com/image/cover/nickpetrov-pixeldreams-thumb.webp',
            audioSrc: 'https://cdn.bensound.com/bensound-againstallodds.mp3'
         }
      ]
   }
}
