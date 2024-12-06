
const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className='centered-div'>
                <div className="contact-form">
                <h2>Contact Us</h2>
                    <div className="contact-fields">
                        <div className='info-fields'>
                            <input type="text" placeholder="First Name" className="contact-input" />
                            <input type="text" placeholder="Last Name" className="contact-input" />
                            <input type="email" placeholder="Email" className="contact-input" />
                        </div>
                        <textarea placeholder="Message" className="contact-message"></textarea>
                    </div>
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;