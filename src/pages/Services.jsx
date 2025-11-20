import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            title: "Borewell Drilling",
            desc: "We use advanced hydraulic and rotary rigs to drill 4.5”, 6”, and 7” borewells. Our experienced operators ensure deep and accurate drilling suitable for homes, industries, and farmlands.",
            features: ["High-speed drilling", "Depth up to 1000+ ft", "Soil testing included"]
        },
        {
            title: "Borewell Flushing & Cleaning",
            desc: "Over time, borewells can get clogged with silt and mud. Our high-pressure compressor cleaning removes blockages and restores the original water yield.",
            features: ["Removes mud & silt", "Increases water flow", "Extends borewell life"]
        },
        {
            title: "CCTV Borewell Inspection",
            desc: "We use high-tech waterproof cameras to inspect the inside of your borewell. This helps identify cracks, casing damage, or blockages without unnecessary digging.",
            features: ["Live video feed", "Accurate depth check", "Damage assessment"]
        },
        {
            title: "Submersible Pump Installation",
            desc: "We supply and install top-brand submersible pumps (Texmo, CRI, Suguna, etc.) tailored to your borewell depth and water requirement.",
            features: ["Expert installation", "Wiring & cabling", "1-year service warranty"]
        },
        {
            title: "Casing Pipe Installation",
            desc: "To prevent borewell collapse, we install high-quality HDPE, PVC, or MS casing pipes. This ensures the structural integrity of your borewell for decades.",
            features: ["Durable materials", "Leak-proof joints", "Custom sizes available"]
        },
        {
            title: "Groundwater Survey",
            desc: "Our geologists use scientific methods to locate the best water points on your property, ensuring a high success rate for drilling.",
            features: ["Geophysical survey", "Water table analysis", "95% success rate"]
        }
    ];

    return (
        <>
            <SEO
                title="Our Services - Borewell Drilling, Cleaning & Pump Installation"
                description="Expert borewell services including drilling, flushing, CCTV inspection, and pump installation in Chennai and Chengalpattu."
                keywords="borewell services, drilling, flushing, pump installation, cctv inspection"
            />

            <div className="container section">
                <h1 className="text-center" style={{ marginBottom: '1rem' }}>Our Professional Services</h1>
                <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--color-grey-dark)' }}>
                    We provide end-to-end water solutions with state-of-the-art machinery and a skilled workforce.
                </p>

                <div className={styles.servicesList}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceRow}>
                            <div className={styles.serviceContent}>
                                <h2 className={styles.serviceTitle}>{service.title}</h2>
                                <p className={styles.serviceDesc}>{service.desc}</p>
                                <ul className={styles.featureList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} className={styles.checkIcon} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="tel:+919841441398" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                    <Phone size={16} style={{ marginRight: '8px' }} /> Book Service
                                </a>
                            </div>
                            <div className={styles.serviceImage}>
                                {/* Placeholder for service image */}
                                <div className={styles.imagePlaceholder}>
                                    <span>{service.title} Image</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
