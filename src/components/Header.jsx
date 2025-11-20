import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.logo}>
                    <Link to="/">
                        <span className={styles.logoText}>Sri Amman</span>
                        <span className={styles.logoSub}>Borewell Services</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.headerActions}>
                    <a href="tel:+919841441398" className="btn btn-primary">
                        <Phone size={18} style={{ marginRight: '8px' }} />
                        Call Now
                    </a>
                    <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
