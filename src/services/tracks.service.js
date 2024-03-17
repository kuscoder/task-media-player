export const tracksService = {
   async fetchTracks() {
      // Mock data
      return [
         {
            title: 'Against All Odds',
            artist: 'Nick Petrov',
            coverSrc: 'https://cdn.bensound.com/image/cover/nickpetrov-pixeldreams-thumb.webp',
            audioSrc: 'https://cdn.bensound.com/bensound-againstallodds.mp3'
         },
         {
            title: 'Sleepless',
            artist: 'Diffie Bosman',
            coverSrc: 'https://cdn.bensound.com/image/cover/diffiebosman-winterbeams-thumbX2.jpg',
            audioSrc: 'https://cdn.bensound.com/bensound-sleepless.mp3'
         },
         {
            title: 'Melancholy Lull',
            artist: 'Vital',
            coverSrc: 'https://cdn.bensound.com/image/cover/vital-morningcoffee-thumbX2.jpg',
            audioSrc: 'https://cdn.bensound.com/bensound-melancholylull.mp3'
         },
         {
            title: 'Refract',
            artist: 'Diffie Bosman',
            coverSrc: 'https://cdn.bensound.com/image/cover/diffiebosman-winterbeams-thumbX2.jpg',
            audioSrc: 'https://cdn.bensound.com/bensound-refract.mp3'
         }
      ]
   }
}
