import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experiencia',
  description: 'Puedes ver mi currículum haciendo clic en el siguiente botón.',
  download_button: 'Descargar CV',
  present: 'Presente',
  month: 'mes | meses',
  year: 'año | años',
  list: [
    {
      company: 'Apple Inc.',
      position: 'Director Ejecutivo',
      url: 'http://www.applebutwithmorebananas.com',
      startDate: '2011-03',
      endDate: 'Presente',
      highlights: [
        'Inventé la serie iFruit, que incluye el revolucionario Apple Banana: el primer smartphone que también puedes comer.',
        'Negocié exitosamente tratados de paz con gigantes tecnológicos rivales usando el poder persuasivo del baile interpretativo.',
        'Lancé el Macbook Airless: el primer portátil que realmente flota en el aire.'
      ],
      description:
        'Desde que tomé el timón en Apple Inc., he dirigido a la compañía a través de olas de innovación mientras usaba una capa de superhéroe en todas las reuniones ejecutivas. Mi estilo de liderazgo se centra en desatar la creatividad, fomentar un ambiente donde se anima a los ingenieros de software a usar pijamas para aumentar la productividad, y reemplazar todas las sillas de oficina con bolsas de frijoles por razones ergonómicas.'
    },
    {
      company: 'Google LLC',
      position: 'Jefe Global de Huevos de Pascua',
      url: 'http://www.googolplexthegame.com',
      startDate: '2015-04',
      endDate: 'Presente',
      highlights: [
        'Creé el primer huevo de Pascua impulsado por IA del mundo que solo aparece cuando los usuarios adivinan correctamente el número de caramelos de goma en un frasco virtual',
        'Organicé un torneo internacional de escondite usando Google Earth, lo cual incrementó la participación de los usuarios en un 5000%.'
      ],
      description:
        'Como Jefe Global de Huevos de Pascua en Google LLC, he liderado la infusión de diversión y sorpresas en nuestros productos. Mi trabajo asegura que cada búsqueda y clic revele una posible sonrisa, mejorando la interacción del usuario y profundizando la lealtad a la marca. También he sido pivotal en el desarrollo de la característica "Búsqueda de Snacks", donde la IA de Google sugiere snacks basados en el historial de navegación de los usuarios, mejorando significativamente la productividad de la tarde.'
    }
  ]
}

export default experience
