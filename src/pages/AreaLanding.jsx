import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './Home.module.css'; // Reusing Home styles for consistency

const AreaLanding = ({ locationName }) => {
    // If locationName is passed as prop use it, otherwise try to get from params or default
    const { area } = useParams();
    const location = locationName || area || "Chennai";

    const formattedLocation = location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <>
            <SEO
                title={`Borewell Service in ${formattedLocation} | Sri Amman Borewell Services`}
                description={`Fast, affordable borewell drilling in ${formattedLocation}. 20+ years experience, high-yield drilling, cleaning, pump installation. Call Now.`}
                keywords={`borewell drilling ${formattedLocation}, borewell cleaning ${formattedLocation}, pump installation ${formattedLocation}, borewell contractor ${formattedLocation}`}
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>
                        Best Borewell Service in {formattedLocation}
                    </h1>
                    <p className={styles.heroSub}>
                        Expert Drilling • Cleaning • Pump Installation in {formattedLocation}
                    </p>
                    <div className={styles.heroButtons}>
                        <a href="tel:+919841441398" className="btn btn-primary">
                            <Phone size={20} style={{ marginRight: '8px' }} /> Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Local Content */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>
                        Why Choose Sri Amman Borewells in {formattedLocation}?
                    </h2>
                    <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--color-grey-dark)' }}>
                        We have been serving the {formattedLocation} area for over 20 years. We understand the local soil conditions and groundwater levels better than anyone else.
                    </p>

                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            <CheckCircle size={20} className={styles.checkIcon} />
                            <span>Local Experts in {formattedLocation}</span>
                        </div>
                        <div className={styles.benefitItem}>
                            <CheckCircle size={20} className={styles.checkIcon} />
                            <span>Fast Service in {formattedLocation}</span>
                        </div>
                        <div className={styles.benefitItem}>
                            <CheckCircle size={20} className={styles.checkIcon} />
                            <span>Affordable Rates</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services for Area */}
            <section className={styles.aboutSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '2rem' }}>Our Services in {formattedLocation}</h2>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <h3 className={styles.serviceTitle}>New Borewell Drilling</h3>
                            <p className={styles.serviceDesc}>Professional drilling services for homes and apartments in {formattedLocation}.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3 className={styles.serviceTitle}>Borewell Cleaning</h3>
                            <p className={styles.serviceDesc}>High-pressure flushing to remove silt and increase water yield.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3 className={styles.serviceTitle}>Pump Repair</h3>
                            <p className={styles.serviceDesc}>Quick repair and installation of submersible pumps in {formattedLocation}.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Looking for a Borewell Contractor in {formattedLocation}?</h2>
                    <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>Call us today for a free site visit and estimate.</p>
                    <a href="tel:+919841441398" className="btn btn-white">Call: +91 9841441398</a>
                </div>
            </section>
        </>
    );
};

export default AreaLanding;
