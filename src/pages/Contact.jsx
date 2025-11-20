import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us - Sri Amman Borewell Services"
                description="Get in touch with Sri Amman Borewell Services for drilling, cleaning, and pump installation. Call +91 9841441398 for a free quote."
                keywords="contact borewell company, borewell phone number, guduvanchery borewell contact"
            />

            <div className="container section">
                <h1 className="text-center" style={{ marginBottom: '1rem' }}>Contact Us</h1>
                <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--color-grey-dark)' }}>
                    We are available 24/7 to answer your queries. Reach out to us for a free consultation.
                </p>

                <div className={styles.contactGrid}>
                    {/* Contact Info */}
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <Phone size={24} className={styles.icon} />
                            <h3>Phone</h3>
                            <p><a href="tel:+919841441398">+91 9841441398</a></p>
                        </div>
                        <div className={styles.infoCard}>
                            <MessageCircle size={24} className={styles.icon} />
                            <h3>WhatsApp</h3>
                            <p><a href="https://wa.me/919841441398">+91 9841441398</a></p>
                        </div>
                        <div className={styles.infoCard}>
                            <Mail size={24} className={styles.icon} />
                            <h3>Email</h3>
                            <p><a href="mailto:sriammanborewells@gmail.com">sriammanborewells@gmail.com</a></p>
                        </div>
                        <div className={styles.infoCard}>
                            <MapPin size={24} className={styles.icon} />
                            <h3>Address</h3>
                            <p>Guduvanchery, Chennai - 603202</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formContainer}>
                        <h2>Send us a Message</h2>
                        <form className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" placeholder="e.g. Tambaram" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="service">Service Needed</label>
                                <select id="service">
                                    <option value="New Borewell">New Borewell Drilling</option>
                                    <option value="Borewell Cleaning">Borewell Cleaning</option>
                                    <option value="Pump Installation">Pump Installation</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4" placeholder="Tell us more about your requirement"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className={styles.mapSection}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704935981!2d80.0599!3d12.8387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzE5LjMiTiA4MMKwMDMnMzUuNiJF!5e0!3m2!1sen!2sin!4v1635789000000!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Sri Amman Borewell Location"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;
