import type { About } from '@/types'

const about: About = {
  title: 'Acerca de',
  summary:
    'De día, soy un ingeniero de software con un talento especial para convertir problemas complejos en soluciones simples. De noche, soy un aficionado a los memes finos y un aspirante a astronauta. Con un gusto por los juegos de palabras y un profundo amor por todo lo relacionado con la tecnología, he logrado convencer a mis plantas de que tuiteen cuando necesitan agua. \n\n Un experimentado malabarista de tareas y un entusiasta de la tecnología, he dominado el arte de convertir el café en código y el caos en orden.',
  education: {
    title: 'Educación',
    list: [
      {
        title: 'Licenciatura en Ciencias del Viaje en el Tiempo',
        institution: 'Universidad de los Universos Paralelos',
        url: 'http://www.universityofparalleluniverses.com/',
        description:
          'Un curso intensivo que combina la física cuántica, estudios de nostalgia y la historia de la ciencia ficción para preparar a los estudiantes para una carrera en el viaje en el tiempo. Módulos especializados en evitar paradojas temporales y cómo integrarse en banquetes medievales.',
        startDate: '2018-08',
        endDate: '2023-07',
        courses: [
          'Mecánica Cuántica 101',
          'Técnicas Avanzadas en Crono-Zoom',
          'Gestión de Paradojas'
        ]
      },
      {
        title: 'Bootcamp de Artes en Estudios Piratas',
        institution: 'Escuela Caribeña de Bucaneros',
        url: 'http://www.caribbeanschoolofbuccaneering.com/',
        description:
          'Un programa riguroso que se adentra en la edad de oro de la piratería. Los estudiantes aprenden no solo la historia y economía de la piratería, sino que también participan en talleres prácticos de navegación de barcos y cartografía de tesoros. Ideal para aquellos que buscan una carrera en recreaciones marítimas o búsqueda de tesoros.',
        startDate: '2018-08',
        endDate: '2023-07',
        courses: ['Ética Pirata', 'Navegación del siglo 17', 'Economía del Saqueo']
      }
    ]
  },
  achievements: {
    title: 'Logros',
    list: [
      {
        title: 'Mejor Astronauta de Sillón del Mundo',
        date: '2023-04',
        url: 'https://website/news/worlds-best-armchair-astronaut',
        awarder: 'Asociación Galáctica de Papas de Sofá',
        summary:
          'Otorgado por logros sobresalientes en el campo de la exploración espacial amateur desde la comodidad de la sala de estar. Reconocido por más de 500 horas de tiempo de telescopio apuntado a la pantalla del televisor, simulando un viaje por el cosmos sin salir del sofá.'
      },
      {
        title: 'Supremo Señor de la Hechicería de Hojas de Cálculo',
        date: '2022-11',
        url: 'https://website/news/spreadsheet-sorcery',
        awarder: 'Liga Internacional de Magos de Datos',
        summary:
          'Honrado por transformar hojas de cálculo ordinarias en deslumbrantes arreglos de fórmulas y gráficos que no solo calculan conjuntos de datos complejos, sino que también cuentan historias convincentes, realizan espectáculos de luces y ocasionalmente predicen el clima.'
      },
      {
        title: 'Gran Campeón de la Procrastinación',
        date: '2024-01',
        url: 'https://website/news/procrastination-champ',
        awarder: 'Gremio Global de Perdedores de Tiempo',
        summary:
          'Premiado por posponer exitosamente una tarea de 10 minutos durante más de 6 meses, una demostración notable de habilidades de procrastinación, convirtiendo el acto de retrasar en una forma de arte, y finalmente completando la tarea durante un corte comercial.'
      },
      {
        title: 'Logro de por Vida en Innovación de Aperitivos',
        date: '2023-03',
        url: 'https://website/news/snack-innovation',
        awarder: 'Federación de Amantes de los Aperitivos',
        summary:
          'Reconocido por una dedicación de por vida a crear las combinaciones perfectas de aperitivos que equilibran lo salado, dulce, crujiente y pegajoso en un solo bocado. Famoso por inventar el nacho de malvavisco con pretzel cubierto de chocolate.'
      }
    ]
  }
}

export default about
