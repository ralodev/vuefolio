import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Proyectos',
  source: 'GitHub',
  website: 'Sitio Web',
  main: [
    {
      name: 'Vuefolio',
      techstack: ['Vuejs', 'i18n', 'TypeScript', 'Tailwind CSS'],
      image: 'vuefolio_cover.webp',
      description:
        'Una plantilla de portafolio construida con Vue.js, i18n y TypeScript. Es altamente personalizable, fácil de configurar y completamente optimizada para rendimiento, SEO y accesibilidad.',
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      name: 'AlienSignalDetector',
      techstack: ['Morse', 'Windows 95', 'WebAssembly', 'Firebase'],
      image: 'project_cover.webp',
      description:
        'Aplicación revolucionaria que utiliza las últimas tecnologías web para escanear la radiación de fondo de microondas cósmicas en busca de señales alienígenas. Perfecta para astrónomos aficionados y entusiastas de la ciencia ficción que quieren ser los primeros en tuitear sobre el contacto extraterrestre.',
      src: 'https://github.com/johndoe/aliensignaldetector',
      url: 'https://detect-alien-signals-now.com/'
    },
    {
      name: 'QuantumCoffeeBrewer',
      techstack: ['Quantum Computing', 'Q#', 'Azure', 'Amazon S3'],
      image: 'project_cover.webp',
      description:
        'Aprovecha el poder de la computación cuántica para preparar la taza de café perfecta. Esta aplicación calcula la temperatura óptima y el tiempo de preparación basado en la mecánica cuántica, prometiendo moléculas de cafeína más enredadas y en superposición.',
      src: 'https://github.com/johndoe/quantumcoffeebrewer',
      url: 'https://quantumcoffeebrewer.com/'
    }
  ],
  // Puedes dejar este arreglo vacío
  other: [
    {
      name: 'MemeGeneratorX',
      techstack: ['Binario', 'Notepad ++', 'MS Paint'],
      description:
        'Una herramienta avanzada, impulsada por IA, que genera memes personalizados basados en tu estado de ánimo. Solo dile cómo te sientes, y él hará el resto. Perfecto para aquellos que necesitan expresarse pero no encuentran las palabras adecuadas.',
      url: 'https://github.com/johndoes/MemeGeneratorX',
      src: 'https://github.com/johndoes/MemeGeneratorX'
    },
    {
      name: 'VirtualBakeOff',
      techstack: ['Aplicación de notas de Blackberry', 'MSDOS'],
      description:
        'Sumérgete en el reino caprichoso de una aplicación de realidad virtual que te otorga la extraordinaria capacidad de participar en emocionantes competiciones de repostería, ¡todo desde la comodidad de tu propia cocina! Aprovechando el ilimitado potencial de la tecnología VR de vanguardia, emprenderás una odisea culinaria, elaborando una variedad de deliciosos pasteles y repostería digital que deleitarán el paladar tanto de mortales como de deidades. \n\nPero he aquí, la pieza de resistencia de esta escapada fantástica radica en el juicio impecable de una inteligencia artificial, perfeccionada a través de la observación meticulosa no solo de cada programa de cocina que jamás haya adornado el plano terrestre, sino también inspirada en los anales ilustres del entretenimiento animado como los venerados épicos de Futurama y la hilaridad irreverente de Los Simpsons. ¡Oh, las historias que podría contarte, pero lamentablemente, eso es una narrativa para otro momento, anidada dentro de los anales de la leyenda culinaria y la maravilla tecnológica!',
      url: 'https://github.com/johndoes/VirtualBakeOff',
      src: 'https://github.com/johndoes/VirtualBakeOff'
    },
    {
      name: 'SleepyTimeScheduler',
      techstack: ['Ruby', 'Iconify', 'Rust'],
      description:
        'Un programador dinámico y basado en algoritmos que decide cuándo deberías dormir basado en tu actividad en redes sociales. Porque, ¿por qué decidir tú cuándo dormir cuando una aplicación puede hacerlo por ti?',
      url: 'https://github.com/johndoes/SleepyTimeScheduler',
      src: 'https://github.com/johndoes/SleepyTimeScheduler'
    },
    {
      name: 'PlantWhisperer',
      techstack: ['Kotlin', 'Spark AR', 'Blogger', 'Blender'],
      description:
        'Una aplicación para amantes de las plantas que traduce las necesidades de tus plantas al inglés claro. ¿Alguna vez te has preguntado si tu helecho tiene sed o tu cactus está solo? ¡Deja que PlantWhisperer te diga lo que realmente están pensando!',
      url: 'https://github.com/johndoes/PlantWhisperer',
      src: 'https://github.com/johndoes/PlantWhisperer'
    }
  ]
}

export default projects
