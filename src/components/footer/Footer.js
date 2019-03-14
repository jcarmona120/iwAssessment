import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <span className="footer__year">{(new Date().getFullYear())} </span>
            <span className="footer__dash">&mdash;</span>  
            <span>Sparta Plaesent</span>
            <span className="footer__dash">-</span>
            <span><a href="http://www.instagram.com" className="footer__link">Instagram</a></span>
            <span className="footer__dash">-</span>
            <span><a href="http://www.facebook.com" className="footer__link">Facebook</a></span>
            <span className="footer__dash">-</span>
            <span><a href="http://www.twitter.com" className="footer__link">Twitter</a></span>
        </div>   
    )
}

export default Footer;