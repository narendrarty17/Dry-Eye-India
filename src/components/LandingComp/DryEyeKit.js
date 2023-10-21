import LearnMoreBtn from './SubComp/LearnMoreBtn';
import styles from './DryEyeKit.module.css';
import { useNavigate } from 'react-router-dom';

const DryEyeKit = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.productContainer}>
            <div className={styles.productDesc}>
                <h3 className={styles.headerTxt}>Dry Eye Kit</h3>
                <img
                    className={styles.underline}
                    alt=""
                    src="/images/LandingPage/underline.svg"
                />
                <p className={styles.productTxt}>
                    Our kit is specifically designed to alleviate dry eye
                    symptoms. Our kit includes high potency Omega 3
                    capsules to reduce inflammation, electric warm compress device to
                    melt the meibum so it can flow properly and high potency magnesium
                    to calm down anxiety.
                </p>
                <br />
                <div
                    className={styles.buttonContainer}
                    onClick={() => navigate('/product')}
                >
                    <LearnMoreBtn />
                </div>
            </div>
            <img
                className={styles.productImg}
                alt=""
                src="/images/LandingPage/supplements.jpg"
            />
        </section>
    );
};

export default DryEyeKit;