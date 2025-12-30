import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={`${styles.content} ${loaded ? styles.visible : ''}`}>
                <span className={styles.tagline}>Capturing Pure Innocence</span>
                <h1 className={styles.title}>
                    Timeless Memories <br />
                    <span className={styles.italic}>of Your Little One</span>
                </h1>
                <p className={styles.description}>
                    Professional baby photography that freezes these fleeting moments into eternal treasures.
                </p>
                <div className={styles.actions}>
                    <a href="#book" className={styles.primaryBtn}>Book a Session</a>
                    <a href="#gallery" className={styles.secondaryBtn}>View Gallery</a>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                {/* Placeholder for a high-quality baby photo. 
            Using a gradient for now, replaced with an image in real app */}
                <div className={styles.placeholderImage}></div>
            </div>
            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
};

export default Hero;
