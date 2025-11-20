import React from 'react';
import SEO from '../components/SEO';
import styles from './Gallery.module.css';

const Gallery = () => {
    // Placeholder images for now
    const images = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        title: `Project ${i + 1}`,
        category: i % 3 === 0 ? 'Drilling' : i % 3 === 1 ? 'Pump Installation' : 'Cleaning'
    }));

    return (
        <>
            <SEO
                title="Our Work Gallery - Sri Amman Borewell Services"
                description="View photos of our borewell drilling projects, pump installations, and cleaning services in Chennai and Chengalpattu."
                keywords="borewell photos, drilling gallery, pump installation images"
            />

            <div className="container section">
                <h1 className="text-center" style={{ marginBottom: '1rem' }}>Our Work Gallery</h1>
                <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--color-grey-dark)' }}>
                    Take a look at our recent projects, machinery, and on-site work.
                </p>

                <div className={styles.galleryGrid}>
                    {images.map((img) => (
                        <div key={img.id} className={styles.galleryItem}>
                            <div className={styles.imagePlaceholder}>
                                <span>{img.title}</span>
                                <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>{img.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
