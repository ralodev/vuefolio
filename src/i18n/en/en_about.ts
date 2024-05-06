import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "By day ☀️, I'm a software engineer with a knack for turning complex problems into simple solutions. By night 🌙, I moonlight as a connoisseur of fine memes and a hopeful astronaut. With a penchant for puns and a deep love for all things tech, I've successfully convinced my plants to tweet when they need watering. \n\n A seasoned juggler of tasks and an enthusiast of all things tech, I've mastered the art of turning coffee ☕ into code and chaos into order.",
  education: {
    title: 'Education',
    list: [
      {
        title: 'Bachelor of Science in Time Traveling',
        institution: 'University of Parallel Universes',
        url: 'http://www.universityofparalleluniverses.com/',
        description:
          'An intensive course that combines quantum physics, nostalgia studies, and the history of science fiction to prepare students for a career in time traveling. Specialized modules on avoiding time paradoxes and blending in at medieval banquets.',
        startDate: '2018-08',
        endDate: '2023-07',
        courses: [
          'Quantum Mechanics 101',
          'Advanced Techniques in Chrono-Zoom',
          'Paradox Management'
        ]
      },
      {
        title: 'Bootcamp of Arts in Pirate Studies',
        institution: 'Caribbean School of Buccaneering',
        url: 'http://www.caribbeanschoolofbuccaneering.com/',
        description:
          'A rigorous program that delves into the golden age of piracy. Students learn not only the history and economics of piracy but also engage in practical ship-sailing and treasure-mapping workshops. Ideal for those seeking a career in maritime reenactment or treasure hunting.',
        startDate: '2018-08',
        endDate: '2023-07',
        courses: ['Pirate Ethics', 'Navigation of the 17th Century', 'Economics of Plunder']
      }
    ]
  },
  achievements: {
    title: 'Achievements',
    list: [
      {
        title: "World's Best Armchair Astronaut",
        date: '2023-04',
        url: 'https://website/news/worlds-best-armchair-astronaut',
        awarder: 'Galactic Couch Potato Association',
        summary:
          "Awarded for outstanding achievements in the field of amateur space exploration from the comfort of one's living room. Recognized for over 500 hours of logged telescope time pointed at the TV screen, simulating a journey across the cosmos while never actually leaving the sofa."
      },
      {
        title: 'Supreme Overlord of Spreadsheet Sorcery',
        date: '2022-11',
        url: 'https://website/news/spreadsheet-sorcery',
        awarder: 'International League of Data Wizards',
        summary:
          'Honored for transforming ordinary spreadsheets into dazzling arrays of formulas and charts that not only compute complex datasets but also tell compelling stories, perform light shows, and occasionally predict the weather.'
      },
      {
        title: 'Grand Champion of Procrastination',
        date: '2024-01',
        url: 'https://website/news/procrastination-champ',
        awarder: 'Global Guild of Time Wasters',
        summary:
          'Awarded for successfully putting off a 10-minute task for over 6 months, a remarkable demonstration of procrastination skills, turning the act of delaying into an art form, and finally completing the task during a commercial break.'
      },
      {
        title: 'Lifetime Achievement in Snack Innovation',
        date: '2023-03',
        url: 'https://website/news/snack-innovation',
        awarder: 'Snack Lovers Federation',
        summary:
          'Recognized for a lifelong dedication to creating the perfect snack combinations that balance salty, sweet, crunchy, and gooey in one bite. Famous for inventing the chocolate-covered pretzel marshmallow nacho.'
      }
    ]
  }
}

export default about
