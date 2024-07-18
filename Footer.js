import React from 'react';

const twitterLink = process.env.REACT_APP_TWITTER_LINK;
const facebookLink = process.env.REACT_APP_FACEBOOK_LINK;
const instagramLink = process.env.REACT_APP_INSTAGRAM_LINK;

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>©2023 AutoRepairShop. All rights reserved.</span>
                
                <div className="social-links">
                    <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;