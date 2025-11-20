import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Phone, MessageCircle } from 'lucide-react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />

            {/* Sticky Buttons (Mobile First) */}
            <div className={styles.stickyButtons}>
                <a href="tel:+919841441398" className={`${styles.stickyBtn} ${styles.callBtn}`}>
                    <Phone size={20} />
                    <span>Call Now</span>
                </a>
                <a href="https://wa.me/919841441398" className={`${styles.stickyBtn} ${styles.whatsappBtn}`}>
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default Layout;
