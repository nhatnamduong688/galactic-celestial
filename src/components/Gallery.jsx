import React from 'react';
import styles from './Gallery.module.css';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop', alt: 'Selling newborn' },
    { id: 2, src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop', alt: 'Baby smile' },
    { id: 3, src: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=800&auto=format&fit=crop', alt: 'Baby details' },
    { id: 4, src: 'https://images.unsplash.com/photo-1544126566-47a324331d5b?q=80&w=800&auto=format&fit=crop', alt: 'Family love' },
    { id: 5, src: 'https://images.unsplash.com/photo-1522771753035-4a5038749e01?q=80&w=800&auto=format&fit=crop', alt: 'Newborn feet' },
    { id: 6, src: 'https://images.unsplash.com/photo-1512713833446-c230e70ab55f?q=80&w=800&auto=format&fit=crop', alt: 'Sleeping baby' },
];

const Gallery = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="gallery"
            className={`${styles.gallery} ${isVisible ? styles.visible : ''}`}
            ref={sectionRef}
        >
            <div className={styles.header}>
                <span className={styles.subtitle}>Portfolio</span>
                <h2 className={styles.title}>Captured Moments</h2>
            </div>
            <div className={styles.grid}>
                {images.map((img) => (
                    <div key={img.id} className={styles.item}>
                        <img src={img.src} alt={img.alt} loading="lazy" />
                        <div className={styles.overlay}>
                            <span>View</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
