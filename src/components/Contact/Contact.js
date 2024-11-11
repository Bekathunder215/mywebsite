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
      <br/>
      <h2>View My CV</h2>
      <p>You can View my CV in PDF format below:</p>
      <a href="mywebsite/IoannisBekiarisCV.pdf" target="_blank" rel="noopener noreferrer" className='btn btn--outline'>View CV</a>
    </section>
  )
}

export default Contact
