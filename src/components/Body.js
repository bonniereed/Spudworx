import React from 'react';
const envelope = require('./images/envelope.png');
const phone = require('./images/phone.png');

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
    aboutUs: {
        fontFamily: 'Architects Daughter',
        padding: '10px',
        backgroundColor: '#373636',
        color: '#ffffff'
    }, contactIcons: {
        maxHeight: '50px',
        borderRadius: '3px',
        backgroundColor: '#373636',
        padding: '5px',


    },

};

// In Navbar, we can assign a style from an object by using curly braces
function Body() {
    return (
        <article style={styles.aboutUs} id="about-Us" class="about-Us">
            <div>
                <h1>
                    Hello there!
                </h1>
                <h2>
                    Spudworx is here to assist you with your personal or business technical needs. Anything from hardware and software support to web design and development.
                    Please use the contact info to get in touch with us!
                </h2>
            </div>
            <div>
                <h1>
                    Our services
                </h1>
                <h2>
                    We are here to address your technical needs and anticipate future needs during your consultation.
                    If you are in need of technical assistance or want to stand up a website we are here for you! Please send us an email or give us a call to get started. We are eager to be of assistance!
                </h2>
            </div>
            <container class='col-4 d-flex justify-content-center' >
                <a href="mailto:bonnie.reed@spudworx.com" target="_blank"><img style={styles.contactIcons} class="icon img-fluid rounded"
                    src={envelope} alt="Envelope icon" /></a>
                <a href="tel:2543008020"><img style={styles.contactIcons} class="icon img-fluid rounded" src={phone} alt="Telephone icon" /></a>
            </container>
        </article>

    );
}

export default Body;