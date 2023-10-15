import styles from './testimonials.module.css';

const testimonials = () => {
    return (
        <section>
            <section className={styles.testimonials}>
                <div className={styles.header}>
                    <h3 className={styles.headerTxt}>What our patients are saying</h3>
                </div>
                <div className={styles.testimonialsMain}>
                    <div className={styles.founderInfo}>
                        <div className={styles.founder1info}>
                            <img className={styles.founderImg}
                                alt=""
                                src="/images/LandingPage/testimonials/founderImgs/founder1.png"
                            />
                            <div>
                                <h4 className={styles.founderName}>Narendra Kumar</h4>
                                <div className={styles.founderPost}>Founder Circle</div>
                            </div>
                        </div>
                        <div className={styles.founder2info}>
                            <img className={styles.founderImg}
                                alt=""
                                src="/images/LandingPage/testimonials/founderImgs/founder2.png"
                            />
                            <div>
                                <h4 className={styles.founderName}>Ankur</h4>
                                <div className={styles.founderPost}>Founder Circle</div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.testimonialsTxt}>
                        “Our dedicated dry eye web portal and mobile
                        app let our patients learn about the disease,
                        nearby doctors, and access all necessary dry
                        eye accessories/kits to combat this disease.”
                    </p>
                </div>
            </section>
            <div className={styles.arrowNav}>
                <img
                    className={styles.arrowNavImg}
                    src='/images/LandingPage/testimonials/arrow-nav.svg'
                    alt='arrow navigation'
                />
            </div >
        </section >
    );
}

export default testimonials;