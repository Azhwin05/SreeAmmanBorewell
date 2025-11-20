import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerGrid}>
                    {/* Company Info */}
                    <div className={styles.footerCol}>
                        <h3 className={styles.footerHeading}>Sri Amman Borewell Services</h3>
                        <p className={styles.footerText}>
                            Trusted borewell drilling and water solutions across Chennai to Chengalpattu.
                            Over 20 years of experience in delivering high-quality borewell services.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://wa.me/919841441398" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerSubHeading}>Quick Links</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerSubHeading}>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin size={18} className={styles.icon} />
                                <span>Guduvanchery, Chennai - 603202</span>
                            </li>
                            <li>
                                <Phone size={18} className={styles.icon} />
                                <a href="tel:+919841441398">+91 9841441398</a>
                            </li>
                            <li>
                                <Mail size={18} className={styles.icon} />
                                <a href="mailto:sriammanborewells@gmail.com">sriammanborewells@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerSubHeading}>Service Areas</h4>
                        <ul className={styles.areaList}>
                            <li>Chennai</li>
                            <li>Tambaram</li>
                            <li>Guduvanchery</li>
                            <li>Chengalpattu</li>
                            <li>OMR / ECR</li>
                            <li>Maraimalai Nagar</li>
                        </ul>
                    </div>
                </div>

                {/* Map Embed */}
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704935981!2d80.0599!3d12.8387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzE5LjMiTiA4MMKwMDMnMzUuNiJF!5e0!3m2!1sen!2sin!4v1635789000000!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Sri Amman Borewell Location"
                    ></iframe>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Sri Amman Borewell Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
