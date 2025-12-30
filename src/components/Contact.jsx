import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Preserve the Moment</h2>
                    <p className={styles.text}>
                        Ready to capture your little one's precious milestones?
                        Let's create something beautiful together.
                    </p>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Your Name" className={styles.input} />
                            <input type="email" placeholder="Email Address" className={styles.input} />
                        </div>
                        <textarea placeholder="Tell me about your vision..." rows="4" className={styles.textarea}></textarea>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.links}>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Pinterest</a>
                    </div>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} Baby Moments Photography. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
