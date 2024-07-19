import React from 'react';

const twitterLink = process.env.REACT_APP_TWITYER_LINK;
const facebookLink = process.util.REACT_APP_FACEBOOK_LINK;
const instagramLink = process.env.REACT_APP_INSTAGRAM_LINK;

const isValidLink = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>©2023 AutoRepairShop. All rights reserved.</span>
                
                <div className="social-links">
                    {isValidLink(twitterLink) && (
                        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    )}
                    {isValidLink(facebookLink) && (
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    )}
                    {isValidLink(instagramLink) && (
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;