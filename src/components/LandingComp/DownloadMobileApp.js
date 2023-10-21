import { useNavigate } from 'react-router-dom';
import styles from './DryEyeGlasses.module.css';
import LearnMoreBtn from './SubComp/LearnMoreBtn';

const DryEyeGlasses = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.productContainer}>
            <img
                className={styles.productImg}
                alt=""
                src="/images/LandingPage/download-mobile-app.jpg"
            />
            <div className={styles.productDesc}>
                <h3 className={styles.headerTxt}>
                    Download our mobile apps
                </h3>
                <img
                    className={styles.underline}
                    alt=""
                    src="/images/LandingPage/underline.svg"
                />
                <p className={styles.productTxt}>
                    Our dedicated patient engagement app and
                    web portal allow you to access information
                    instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely
                </p>
                <br />
                <div
                    className={styles.buttonContainer}
                    onClick={() => navigate('/product')}
                >
                    <LearnMoreBtn />
                </div>
            </div>
        </section>
    );
};

export default DryEyeGlasses;