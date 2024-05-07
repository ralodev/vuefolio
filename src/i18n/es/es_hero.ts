import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hola, mi nombre es John Doe',
  subtitle:
    'He dominado el arte de convertir el café en código y el caos en orden. Mi pasión por resolver problemas es igualada solo por mi amor por hacer panqueques caseros los domingos por la mañana.',
  name: 'John Phillip Doe',
  url: 'https://john-does.com/',
  contact_button: 'Contáctame',
  //Si un perfil tiene una cadena vacía '', el botón no se renderizará
  profiles: {
    linkedin: 'https://linkedin.com/in/johndoe-innovator',
    github: 'https://github.com/johndoethecoderohyeah',
    youtube: 'https://youtube.com/johndoesstuff',
    twitter: 'https://twitter.com/johndoetechuncensored',
    instagram: '',
    facebook: 'https://facebook.com/johndoepersonalstuff'
  },
  home: 'Inicio'
}

export default hero
