import type { Contact } from '@/types'

const contact: Contact = {
  title: 'Contact',
  description:
    'If you want to get in touch with me, you can do it through my social media or via email.',
  social: 'There are my social media accounts and my email address:',
  //Keep the brackets and quotes around @ -> {'@'}
  email: "johndoe{'@'}mail.com",
  copy: 'Copy',
  copied: 'Copied',
  form: 'Alternatively, you can use this form to send me a message:',
  name_label: 'Name',
  name_placeholder: 'Enter your Name',
  email_label: 'Email',
  email_placeholder: 'Enter your Email',
  message_label: 'Message',
  message_placeholder: 'Enter your Message',
  send: 'Send Message',
  sending: 'Sending...',
  restriction: 'You can send one message every 30 minutes, please wait.'
}

export default contact
