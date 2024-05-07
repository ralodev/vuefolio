import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hello, my name is John Doe',
  subtitle:
    "I've mastered the art of turning coffee into code and chaos into order. My passion for solving problems is matched only by my love for making homemade pancakes on Sunday mornings.",
  name: 'John Phillip Doe',
  url: 'https://john-does.com/',
  contact_button: 'Get in touch',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'https://linkedin.com/in/johndoe-innovator',
    github: 'https://github.com/johndoethecoderohyeah',
    youtube: 'https://youtube.com/johndoesstuff',
    twitter: 'https://twitter.com/johndoetechuncensored',
    instagram: '',
    facebook: 'https://facebook.com/johndoepersonalstuff'
  },
  home: 'Home'
}

export default hero
