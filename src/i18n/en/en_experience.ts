import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'Apple Inc.',
      position: 'Chief Executive Officer',
      url: 'http://www.applebutwithmorebananas.com',
      startDate: '2011-03',
      endDate: 'Present',
      highlights: [
        'Invented the iFruit series, which includes the revolutionary Apple Banana: the first smartphone you can also eat.',
        'Successfully negotiated peace treaties with rival tech giants using the persuasive power of interpretative dance.',
        'Launched the Macbook Airless: the first laptop that actually floats in the air.'
      ],
      description:
        "Since taking the helm at Apple Inc., I've steered the company through waves of innovation while wearing a superhero cape in all executive meetings. My leadership style focuses on unleashing creativity, fostering an environment where software engineers are encouraged to wear pajamas to boost productivity, and replacing all office chairs with bean bags for ergonomic reasons."
    },
    {
      company: 'Google LLC',
      position: 'Global Head of Easter Eggs',
      url: 'http://www.googolplexthegame.com',
      startDate: '2015-04',
      endDate: 'Present',
      highlights: [
        'Created the world’s first AI-powered Easter egg that only appears when users correctly guess the number of jelly beans in a virtual jar',
        'Organized an international hide-and-seek tournament using Google Earth, which increased user engagement by 5000%.'
      ],
      description:
        'As the Global Head of Easter Eggs at Google LLC, I have championed the infusion of fun and surprises into our products. My work ensures that every search and click unveils a potential smile, enhancing user interaction and deepening brand loyalty. I have also been pivotal in the development of the ‘Snack Search’ feature, where the Google AI suggests snacks based on users’ browsing history, significantly improving afternoon productivity.'
    }
  ]
}

export default experience
