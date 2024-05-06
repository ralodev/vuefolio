import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Vuefolio',
      techstack: ['Vuejs', 'i18n', 'TypeScript', 'Tailwind CSS'],
      image: 'vuefolio_cover.webp',
      description:
        'A portfolio template built with Vue.js, i18n, and TypeScript. It is highly customizable, easy to set up, and thoroughly optimized for performance, SEO, and accessibility.',
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      name: 'AlienSignalDetector',
      techstack: ['Morse', 'Windows 95', 'WebAssembly', 'Firebase'],
      image: 'project_cover.webp',
      description:
        'Revolutionary app that uses the latest in web technologies to scan cosmic microwave background radiation for alien signals. Perfect for amateur astronomers and sci-fi enthusiasts who want to be the first to tweet about extraterrestrial contact.',
      src: 'https://github.com/johndoe/aliensignaldetector',
      url: 'https://detect-alien-signals-now.com/'
    },
    {
      name: 'QuantumCoffeeBrewer',
      techstack: ['Quantum Computing', 'Q#', 'Azure', 'Amazon S3'],
      image: 'project_cover.webp',
      description:
        'Harness the power of quantum computing to brew the perfect cup of coffee. This app calculates the optimal temperature and brewing time based on quantum mechanics, promising the most entangled and superpositioned caffeine molecules.',
      src: 'https://github.com/johndoe/quantumcoffeebrewer',
      url: 'https://quantumcoffeebrewer.com/'
    }
  ],
  // You can leave this array empty
  other: [
    {
      name: 'MemeGeneratorX',
      techstack: ['Binary', 'Notepad ++', 'MS Paint'],
      description:
        "An advanced, AI-powered tool that generates custom memes based on your mood. Just tell it how you're feeling, and it'll do the rest. Perfect for those who need to express themselves but can't quite find the words.",
      url: 'https://github.com/johndoes/MemeGeneratorX',
      src: 'https://github.com/johndoes/MemeGeneratorX'
    },
    {
      name: 'VirtualBakeOff',
      techstack: ['Blackberry notes app', 'MSDOS'],
      description:
        'This is a long description in a really small card: Immerse yourself in the whimsical realm of a virtual reality application that bestows upon you the extraordinary ability to partake in exhilarating baking competitions, all from the cozy confines of your very own kitchen! Harnessing the boundless potential of cutting-edge VR technology, you shall embark upon a culinary odyssey, concocting an array of delectable digital cakes and pastries that shall tantalize the taste buds of both mortals and deities alike \n\nBut lo and behold, for the pièce de résistance of this fantastical escapade lies in the impeccable judgement of an artificial intelligence, honed to perfection through the meticulous observation of not only every baking show to ever grace the terrestrial plane, but also drawing inspiration from the illustrious annals of animated entertainment such as the revered epics of Futurama and the irreverent hilarity of The Simpsons. Oh, the tales it could regale you with, but alas, thats a narrative for another time, nestled within the annals of culinary legendry and technological marvel!',
      url: 'https://github.com/johndoes/VirtualBakeOff',
      src: 'https://github.com/johndoes/VirtualBakeOff'
    },
    {
      name: 'SleepyTimeScheduler',
      techstack: ['Ruby', 'Iconify', 'Rust'],
      description:
        'A dynamic, algorithm-driven scheduler that decides when you should sleep based on your social media activity. Because why should you decide when to sleep when an app can do it for you?',
      url: 'https://github.com/johndoes/SleepyTimeScheduler',
      src: 'https://github.com/johndoes/SleepyTimeScheduler'
    },
    {
      name: 'PlantWhisperer',
      techstack: ['Kotlin', 'Spark AR', 'Blogger', 'Blender'],
      description:
        "An app for plant lovers that translates your plants' needs into plain English. Ever wondered if your fern is thirsty or your cactus is lonely? Let PlantWhisperer tell you what they're really thinking!",
      url: 'https://github.com/johndoes/PlantWhisperer',
      src: 'https://github.com/johndoes/PlantWhisperer'
    }
  ]
}

export default projects
