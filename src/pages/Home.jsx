import React from 'react';
import { Phone, MessageCircle, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <SEO
                title="Trusted Borewell Drilling & Water Solutions"
                description="Sri Amman Borewell Services: 20+ years experience in borewell drilling, cleaning, and pump installation across Chennai to Chengalpattu. Call now!"
                keywords="borewell drilling, borewell cleaning, chennai, chengalpattu, pump installation"
            />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>
                        Trusted Borewell Drilling & Water Solutions Across Chennai to Chengalpattu
                    </h1>
                    <p className={styles.heroSub}>
                        20+ Years of Experience • 100% Reliable Service • Fast Response
                    </p>
                    <div className={styles.heroButtons}>
                        <a href="tel:+919841441398" className="btn btn-primary">
                            <Phone size={20} style={{ marginRight: '8px' }} /> Call Now
                        </a>
                        <a href="https://wa.me/919841441398" className="btn btn-secondary">
                            <MessageCircle size={20} style={{ marginRight: '8px' }} /> WhatsApp Us
                        </a>
                    </div>
                    <div className={styles.trustBadges}>
                        <div className={styles.badge}>20+ Years Experience</div>
                        <div className={styles.badge}>1500+ Borewells Completed</div>
                        <div className={styles.badge}>Certified Operators</div>
                    </div>
                </div>
            </section>

            {/* Quick Benefits */}
            <section className={styles.benefitsSection}>
                <div className={`container ${styles.benefitsGrid}`}>
                    {[
                        "Fast Response & On-Time Work",
                        "Advanced Hydraulic & Rotary Rigs",
                        "Accurate Groundwater Survey",
                        "Affordable & Transparent Pricing",
                        "High Water Yield Assurance",
                        "Complete End-to-End Solutions"
                    ].map((benefit, index) => (
                        <div key={index} className={styles.benefitItem}>
                            <CheckCircle size={20} className={styles.checkIcon} />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Overview */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '1rem' }}>Our Professional Services</h2>
                    <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                        We offer comprehensive borewell solutions for residential, commercial, and agricultural needs.
                    </p>

                    <div className={styles.servicesGrid}>
                        {[
                            { title: "Borewell Drilling", desc: "High-performance 4.5”, 6”, 7” drilling for homes, farms & industries." },
                            { title: "Borewell Flushing", desc: "High-pressure compressor cleaning to increase water output." },
                            { title: "CCTV Inspection", desc: "Live camera check for cracks, blockages & structural issues." },
                            { title: "Pump Installation", desc: "Top-brand submersible pump fitting, wiring & maintenance." },
                            { title: "Casing Pipe Installation", desc: "HDPE / PVC / Steel casing for long-lasting borewell life." },
                            { title: "Groundwater Survey", desc: "Scientific survey with geologist support for water point accuracy." }
                        ].map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDesc}>{service.desc}</p>
                                <Link to="/services" className={styles.serviceLink}>Learn More <ArrowRight size={16} /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className={`section ${styles.aboutSection}`}>
                <div className="container">
                    <div className={styles.aboutContent}>
                        <h2>About Sri Amman Borewell Services</h2>
                        <p>
                            Sri Amman Borewell Services is a leading borewell contractor operating from Chennai to Chengalpattu with over 20 years of field expertise.
                            We have completed 1500+ borewells for residential, commercial, and agricultural clients.
                        </p>
                        <p>
                            Our modern rigs, expert operators, and transparent pricing make us one of the most trusted borewell teams in Tamil Nadu.
                        </p>
                        <Link to="/about" className="btn btn-primary" style={{ marginTop: '1rem' }}>Read More About Us</Link>
                    </div>
                </div>
            </section>

            {/* Service Area Belt */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '2rem' }}>Serving Across Chennai to Chengalpattu</h2>
                    <div className={styles.areaBelt}>
                        <div className={styles.areaList}>
                            <MapPin size={24} className={styles.areaIcon} />
                            <p>
                                Chennai → Tambaram → Vandalur → Urapakkam → Guduvanchery → Potheri → Kattankulathur → Maraimalai Nagar → SP Koil → Paranur → Chengalpattu
                            </p>
                        </div>
                        <div className={styles.areaList}>
                            <MapPin size={24} className={styles.areaIcon} />
                            <p>
                                OMR/ECR: Sholinganallur, Medavakkam, Pallikaranai, Perumbakkam, Navalur, Siruseri, Kelambakkam, Thiruporur
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Need Borewell Drilling Today?</h2>
                    <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>Get a free consultation and quote instantly.</p>
                    <div className={styles.ctaButtons}>
                        <a href="tel:+919841441398" className="btn btn-white">Call: +91 9841441398</a>
                        <a href="https://wa.me/919841441398" className="btn btn-outline-white">WhatsApp Us</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
