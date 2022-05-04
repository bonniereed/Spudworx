import React from 'react';
const pic = require('./images/coverspudcolor.png');
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
    card: {
        fontSize: 2.5,
        fontFamily: 'Caveat',
    },
    heading: {
        position: 'fixed',
        top: '0px'
    },
    a: {
        textDecoration: 'none',
        color: '#eaffd0',
    },
    pic: {
        maxHeight: '300px',
        marginTop: '5px',
        marginBottom: '5px',
        padding: '5px',
        borderRadius: '10px',
        justifyContent: 'center'
    },
    nav: {
        backgroundColor: '#3c97d3',
        height: 'maxHeight'
    }
};

// In Navbar, we can assign a style from an object by using curly braces
function Header() {
    return (
        <nav style={styles.nav}>
            <img src={pic} alt='spudworx' className='profile-header rounded mx-auto d-block' style={styles.pic} />
        </nav>
    );
}
export default Header;