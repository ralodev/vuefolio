import type { Contact } from '@/types'

const contact: Contact = {
  title: 'Contacto',
  description:
    'Si deseas ponerte en contacto conmigo, puedes hacerlo a través de mis redes sociales o vía email.',
  social: 'Aquí están mis cuentas de redes sociales y mi dirección de correo electrónico:',
  //Mantén los corchetes y comillas alrededor de @ -> {'@'}
  email: "johndoe{'@'}mail.com",
  copy: 'Copiar',
  copied: 'Copiado',
  form: 'Alternativamente, puedes usar este formulario para enviarme un mensaje:',
  name_label: 'Nombre',
  name_placeholder: 'Ingresa tu Nombre',
  email_label: 'Correo Electrónico',
  email_placeholder: 'Ingresa tu Correo Electrónico',
  message_label: 'Mensaje',
  message_placeholder: 'Ingresa tu Mensaje',
  send: 'Enviar Mensaje',
  sending: 'Enviando...',
  restriction: 'Puedes enviar un mensaje cada 30 minutos, por favor espera.'
}

export default contact
