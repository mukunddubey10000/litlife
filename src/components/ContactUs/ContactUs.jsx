import React, { useRef } from 'react'
import './ContactUs.css'
import './../MainPage.css'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dgjhmls', 'template_5izi7vu', form.current, {
                publicKey: 'EXTj4QaI6IM-0Y37d',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div name="contactUs" className='contact-us-title'>
                <span className='stroke-text'>Contact </span>
                <span>Us</span>
            </div>
            <div className='contact-us-container'>

                <div className='grid-container'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='left-container grid-item'>

                            <div className='form'>
                                <textarea className='input1' placeholder='Name' name='from_name' />
                                <textarea className='input2' placeholder='Email' name="from_email" />
                                <textarea className='input3' placeholder='Phone Number' name="from_phone_number" />
                                <textarea className='input4' placeholder='Enter Message Here' name="from_message" />
                            </div>

                            <div className='submit-form' onClick={sendEmail}>Submit</div>
                        </div>
                    </form>

                    {/* Here goes contact details */}
                    <div className='right-container grid-item'>
                        <div className='phone'>
                            <img src="https://i.pinimg.com/originals/87/b1/2a/87b12a1e8a11f6c1264a237c5f08c195.png" />
                            <a href="tel:+919506501200">+91-9506501200</a>
                        </div>

                        <div className='email'>
                            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnon49GJay1rHh9TtfQjxt2nvDP0H7Hpa9XtbB-Io6Ig&s`} alt="" />
                            <a href="mailto:trsinnovation2022@gmail.com">trsinnovation2022@gmail.com</a>
                        </div>

                    </div>
                    <div className='maps grid-item'>
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=ghazipur+(LitLife)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs