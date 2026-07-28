import whatsappIcon from '../assets/ContactMeImg/whatsapp-icon.png';
import gmailIcon from '../assets/ContactMeImg/gmail-icon.png';
import './ContactMe.css';

export function ContactMe() {
    return (
        <section className='contact-me' id='contact-me'>
            <h1>I'm currently available for work</h1>
            <h3>If you are looking for a frontend developer, contact me!</h3>
            <div className='buttons'>
                <a href='https://wa.me/60126723356' target="_blank" rel="noopener noreferrer" className="whatsapp">
                    <img className='icon' src={whatsappIcon} alt="whatsapp" />
                    <div>
                        <h4>+6012-6723356</h4>
                        <p>Direct Message</p>
                    </div>
                </a>
                <a href="mailto:shunlinglim@gmail.com" target="_blank" className="gmail">
                    <img className='icon' src={gmailIcon} alt="gmail" />
                    <div>
                        <h4>shunlinglim@gmail.com</h4>
                        <p>Send Email</p>
                    </div>
                </a>
            </div>
        </section>
    )
}