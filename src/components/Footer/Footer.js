import React from 'react'
import { Button } from '../Button/Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCableCar, faCheckCircle, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacatio deals
                </p>
                <p className="footer-subscription-text">You can unsubscribe at any time.</p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        TRVL
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </Link>
                </div>
                <small className="website-rights">TRVL Copyright 2020</small>
                <div className="social-icons">
                    <Link
                        className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <FontAwesomeIcon icon={faCableCar} />
                    </Link>
                    <Link
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="instagram"
                    >
                        <FontAwesomeIcon icon={faPhotoFilm} />
                    </Link>
                    <Link
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="instagram"
                    >
                        <FontAwesomeIcon icon={faPhotoFilm} />
                    </Link>
                    <Link
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="instagram"
                    >
                        <FontAwesomeIcon icon={faPhotoFilm} />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Footer
