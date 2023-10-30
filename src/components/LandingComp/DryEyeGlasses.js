import styles from './DryEyeGlasses.module.css';
import LearnMoreBtn from './SubComp/LearnMoreBtn';

import { useNavigate } from 'react-router-dom';

const DryEyeGlasses = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.productContainer}>
            <img
                className={styles.productImg}
                alt=""
                src="/images/LandingPage/moistureChamberImg.jpg"
            />
            <div className={styles.productDesc}>
                <h3 className={styles.headerTxt}>Dry Eye Glasses</h3>
                <img
                    className={styles.underline}
                    alt=""
                    src="/images/LandingPage/underline.svg"
                />
                <p className={styles.productTxt}>
                    Dry eye Glasses are must for every dry eye sufferers.
                    It has a soft silicone protective padding which protects
                    our eyes from environmental irritants such as wind, dust thus slowing
                    down the evaporation of tears, it creates a moist atmosphere around the
                    eyes which supports tear film stability and thus protects eyes from
                    drying up.
                </p>
                <br />
                <div
                    className={styles.buttonContainer}
                    onClick={() => navigate('/producttemp')}>
                    <LearnMoreBtn />
                </div>
            </div>
        </section>
    );
};

export default DryEyeGlasses;