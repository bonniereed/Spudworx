import React from 'react';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {

    footer: {
        fontFamily: 'Architects Daughter',
        position: 'relative',
        backgroundColor: '#373636',
        color: '#ffffff',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
};

// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
    return (
        <footer style={styles.footer} >
            <div style={styles.footer} >
                <div class="footer-copyright text-center py-3">© 2022 Created by:<br />🍟 Spudworx 🍟
                </div>
            </div>
        </footer>

    );
}

export default Footer;