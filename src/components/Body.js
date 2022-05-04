import React from 'react';


// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
    aboutUs: {
        fontFamily: 'Roboto Mono',
        padding: '10px',
        backgroundColor: '#373636',
        color: '#ffffff'
    },

};

// In Navbar, we can assign a style from an object by using curly braces
function AboutMe() {
    return (
        <article style={styles.aboutUs} id="about-Us" class="about-Us">
            <div>
                <h1>
                    Hello there!
                </h1>
                <p>
                    Spudworx is here to assist you with your personal or business technical needs. Anything from hardware and software support to web design and development.
                    Please use the contact info to get in touch with us!
                </p>
            </div>
            <div>
                <h2>
                    Our services
                </h2>
                <p>
                    We are here to address your technical needs and anticipate future needs during your consultation.
                    If you are in need of technical assistance or want to stand up a website we are here for you! Please send us an email or give us a call to get started. We are eager to be of assistance!
                </p>
            </div>
        </article>
    );
}

export default AboutMe;