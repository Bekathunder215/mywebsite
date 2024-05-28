import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      <br/>
      Call or Text me <br/>
      <a href={`call:${contact.sms}`}>
        <span type='button' className='btn btn--outline'>
          {contact.sms}
        </span>
      </a>
    </section>
  )
}

export default Contact
