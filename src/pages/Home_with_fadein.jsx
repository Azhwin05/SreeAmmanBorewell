import React from 'react';
import { Phone, MessageCircle, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
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
                    <FadeIn direction="up">
                        <h1 className={styles.heroTitle}>
                            Trusted Borewell Drilling & Water Solutions Across Chennai to Chengalpattu
                        </h1>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className={styles.heroSub}>
                            20+ Years of Experience • 100% Reliable Service • Fast Response
                        </p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                        <div className={styles.heroButtons}>
                            <a href="tel:+919841441398" className="btn btn-primary">
                                <Phone size={20} style={{ marginRight: '8px' }} /> Call Now
                            </a>
                            <a href="https://wa.me/919841441398" className="btn btn-secondary">
                                <MessageCircle size={20} style={{ marginRight: '8px' }} /> WhatsApp Us
                            </a>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.6}>
                        <div className={styles.trustBadges}>
                            <div className={styles.badge}>20+ Years Experience</div>
                            <div className={styles.badge}>1500+ Borewells Completed</div>
                            <div className={styles.badge}>Certified Operators</div>
                        </div>
                    </FadeIn>
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
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className={styles.benefitItem}>
                                <CheckCircle size={20} className={styles.checkIcon} />
                                <span>{benefit}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Services Overview */}
            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h2 className="text-center" style={{ marginBottom: '1rem' }}>Our Professional Services</h2>
                        <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                            We offer comprehensive borewell solutions for residential, commercial, and agricultural needs.
                        </p>
                    </FadeIn>

                    <div className={styles.servicesGrid}>
                        {[
                            { title: "Borewell Drilling", desc: "High-performance 4.5”, 6”, 7” drilling for homes, farms & industries.", img: "https://images.unsplash.com/photo-1590059593663-49824d74392e?auto=format&fit=crop&w=600&q=80" },
                            { title: "Borewell Flushing", desc: "High-pressure compressor cleaning to increase water output.", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" },
                            { title: "CCTV Inspection", desc: "Live camera check for cracks, blockages & structural issues.", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80" },
                            { title: "Pump Installation", desc: "Top-brand submersible pump fitting, wiring & maintenance.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" },
                            { title: "Casing Pipe Installation", desc: "HDPE / PVC / Steel casing for long-lasting borewell life.", img: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=600&q=80" },
                            { title: "Groundwater Survey", desc: "Scientific survey with geologist support for water point accuracy.", img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=600&q=80" }
                        ].map((service, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className={styles.serviceCard}>
                                    <div className={styles.serviceImgContainer}>
                                        <img src={service.img} alt={service.title} className={styles.serviceImg} />
                                    </div>
                                    <div className={styles.serviceContent}>
                                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                                        <p className={styles.serviceDesc}>{service.desc}</p>
                                        <Link to="/services" className={styles.serviceLink}>Learn More <ArrowRight size={16} /></Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className={`section ${styles.aboutSection}`}>
                <div className="container">
                    <FadeIn>
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
                    </FadeIn>
                </div>
            </section>

            {/* Service Area Belt */}
            <section className="section">
                <div className="container">
                    <FadeIn>
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
                    </FadeIn>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <FadeIn direction="up">
                        <h2>Need Borewell Drilling Today?</h2>
                        <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>Get a free consultation and quote instantly.</p>
                        <div className={styles.ctaButtons}>
                            <a href="tel:+919841441398" className="btn btn-white">Call: +91 9841441398</a>
                            <a href="https://wa.me/919841441398" className="btn btn-outline-white">WhatsApp Us</a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default Home;
