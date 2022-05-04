import React from 'react';
const envelope = require('./images/envelope.png');
const phone = require('./images/phone.png');
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {

    footer: {
        fontFamily: 'Roboto Mono',
        position: 'relative',
        backgroundColor: '#373636',
        color: '#ffffff'
    },
    contactIcons: {
        maxHeight: '50px',
        borderRadius: '3px',
        backgroundColor: '#373636',
        padding: '5px',
    },
};

// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
    return (

        <footer style={styles.footer} class="footer mt-auto py-3 page-footer pt-4">
            <div style={styles.footer} class="container-fluid text-center text-md-left">
                <div class="footer-copyright text-center py-3">© 2022 Created by:<br />🍟 Spudworx
                </div>
                <div>
                    <a style={styles.contactIcons} href="mailto:bonnie.reed@spudworx.com" target="_blank"><img style={styles.contactIcons} class="icon img-fluid rounded"
                        src={envelope} alt="Envelope icon" /></a>
                    <a style={styles.contactIcons} href="tel:2543008020"><img style={styles.contactIcons} class="icon img-fluid rounded" src={phone} alt="Telephone icon" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;