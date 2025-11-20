import React from 'react';
import { CheckCircle, Users, Award, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './About.module.css';

const About = () => {
    return (
        <>
            <SEO
                title="About Us - Sri Amman Borewell Services"
                description="Sri Amman Borewell Services has 20+ years of experience in borewell drilling. We are the most trusted borewell contractors in Chennai and Chengalpattu."
                keywords="about sri amman borewell, borewell company history, borewell contractors chennai"
            />

            {/* Hero / Intro */}
            <section className={styles.introSection}>
                <div className="container">
                    <h1 className="text-center" style={{ marginBottom: '1rem' }}>About Sri Amman Borewell Services</h1>
                    <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-grey-dark)' }}>
                        Reliable water access for every home, farm, and industry.
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="section">
                <div className={`container ${styles.storyGrid}`}>
                    <div className={styles.storyContent}>
                        <h2>Our Story & Mission</h2>
                        <p>
                            Sri Amman Borewell Services was established over 20 years ago with a simple mission: to provide reliable and affordable water solutions to the people of Chennai and Chengalpattu.
                        </p>
                        <p>
                            Starting with a single rig, we have grown into a leading borewell contractor with a fleet of advanced hydraulic and rotary rigs. We take pride in our transparency, on-time delivery, and high success rate in finding water.
                        </p>
                        <p>
                            Our team consists of experienced geologists, rig operators, and technicians who are dedicated to ensuring that every borewell we drill is a success.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>1500+</span>
                                <span className={styles.statLabel}>Borewells</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>20+</span>
                                <span className={styles.statLabel}>Years Exp.</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>40+</span>
                                <span className={styles.statLabel}>Locations</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.storyImage}>
                        <div className={styles.imagePlaceholder}>
                            <span>Team/Rig Photo</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyUsSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Why Choose Us?</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <Users size={40} className={styles.featureIcon} />
                            <h3>Expert Team</h3>
                            <p>Our operators have decades of field experience handling complex soil conditions.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <Award size={40} className={styles.featureIcon} />
                            <h3>Quality Assurance</h3>
                            <p>We use only ISI-marked casing pipes and top-brand pumps for long-lasting results.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <MapPin size={40} className={styles.featureIcon} />
                            <h3>Wide Coverage</h3>
                            <p>From Chennai to Chengalpattu, we cover all major areas including OMR and ECR.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <CheckCircle size={40} className={styles.featureIcon} />
                            <h3>Transparent Pricing</h3>
                            <p>No hidden costs. We provide a clear estimate before starting any work.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
