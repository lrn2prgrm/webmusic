import { actionTypes } from '../actions/actions'

const artist = {
  list: [
    {id: 'a', name: 'Adele', biography: 'Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante y compositora británica.', image: './assets/images/adele.jpg', songs: ['Hello', 'Someone like you', 'Only one']},
    {id: 'b', name: 'Bruno Mars', biography: 'Peter Gene Hernandez, conocido como Bruno Mars, es un cantante, compositor, productor musical y coreógrafo estadounidense. ', image: './assets/images/brunomars.jpg', songs: ['Finese', '24K magic']},
    {id: 'c', name: 'Lana del Rey', biography: 'Elizabeth Woolridge Grant ​, más conocida por su nombre artístico Lana Del Rey, es una cantante, actriz y compositora estadounidense. Es reconocida también por su estilo vintage.', image: './assets/images/lanadelrey.jpg', songs: ['Summertime sadness', 'Born to die', 'Video Games']},
    {id: 'd', name: 'Oasis', biography: 'Oasis fue una banda de Britpop británica formada en Mánchester en 1991. En sus inicios, conocidos como The Rain.', image: './assets/images/oasis.jpg', songs: ['Wonderwall', 'Supersonic', 'Stand by me']},
    {id: 'e', name: 'Green day', biography: 'Green Day es una banda estadounidense de pop punk​​​ y punk rock​​ integrada inicialmente por tres miembros: Billie Joe Armstrong, Mike Dirnt y Tré Cool.', image: './assets/images/greenday.jpg', songs: ['21 Guns', 'American Idiot', 'Holiday']},
    {id: 'f', name: 'The Cranberries', biography: 'The Cranberries es una banda irlandesa de rock, formada en Limerick durante 1989 bajo el nombre de The Cranberry Saw Us, denominación cambiada, más tarde, por la vocalista Dolores O-Riordan.', image: './assets/images/the-cranberries.jpg', songs:['Dreams', 'Zombie', 'Linger']}
  ],
  popular: {
    songs: [
      {id:'123a',img: 'https://images.shazam.com/coverart/t299399402-b1145639638_s400.jpg', nameSong: 'Tuesday', artist: 'Burak Yeter Feat. Danelle Sandoval', time: '4:00', votes: '34'},
      {id:'123b',img: 'https://images.shazam.com/coverart/t342514741-b1193701400_s400.jpg', nameSong: 'Perfect', artist: 'Ed Sheran', time: '3:00', votes: '45'},
      {id:'123c',img: 'https://images.shazam.com/coverart/t409776952-b1356574318_s400.jpg', nameSong: 'Remind Me To Forget', artist: 'Kygo&Miguel', time: '3:45', votes: '32'},
      {id:'123d',img: 'https://images.shazam.com/coverart/t410289048-b1358284336_s400.jpg', nameSong: 'Flames', artist: 'David Gueta & Sia', time: '2:45', votes: '56'},
      {id:'123e',img: 'https://images.shazam.com/coverart/t407538682-b1348616032_s400.jpg', nameSong: 'Magenta Riddim', artist: 'Dj Snake', time: '3', votes: '20'}
    ],
    textParagraph: 'Most Popular this week'
  },
  recommended: {
    songs: [
      {id:'123f',img: 'https://images.shazam.com/coverart/t299399402-b1145639638_s400.jpg', nameSong: 'Tuesdayddd', artist: 'Burak Yeter Feat. Danelle Sandoval', time: '4:00', votes: '34'},
      {id:'123g',img: 'https://images.shazam.com/coverart/t342514741-b1193701400_s400.jpg', nameSong: 'Perfect', artist: 'Ed Sheran', time: '3:00', votes: '45'},
      {id:'123h',img: 'https://images.shazam.com/coverart/t409776952-b1356574318_s400.jpg', nameSong: 'Remind Me To Forget', artist: 'Kygo&Miguel', time: '3:45', votes: '32'},
      {id:'123i',img: 'https://images.shazam.com/coverart/t410289048-b1358284336_s400.jpg', nameSong: 'Flames', artist: 'David Gueta & Sia', time: '2:45', votes: '56'},
      {id:'123j',img: 'https://images.shazam.com/coverart/t407538682-b1348616032_s400.jpg', nameSong: 'Magenta Riddim', artist: 'Dj Snake', time: '3', votes: '20'}
    ],
    textParagraph: 'Most Recommended'
  },
};

const init_state = {
  show : artist,
  activeArtist: [{id: 'a', name: 'Adele', biography: 'Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante y compositora británica.', image: './assets/images/adele.jpg', songs: ['Hello', 'Someone like you', 'Only one']}]
}

export default (state = init_state , action) => {
  switch(action.type) {
    case actionTypes.activeArtist:
      state = {
        show: state.show,
        activeArtist: state.show.list.map((val) => {
          if(action.id === val.id) {
            return {
              id: val.id,
              name: val.name,
              biography: val.biography,
              image: val.image,
              songs: val.songs
            }
          }
        })
      };
      break;
    default : return state
  }
  return state
}