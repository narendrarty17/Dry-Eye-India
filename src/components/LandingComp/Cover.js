import { useNavigate } from 'react-router-dom';
import styles from './Cover.module.css';

const Cover = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.cover}>
            <div className={styles.coverContent}>
                <h1 className={styles.headerTxt}>Your Partner in Dry Eye Recovery</h1>
                <p className={styles.coverTxt}>
                    Our Mission is to direct dry eye patients
                    in right treatment plan to lead a happy and
                    productive life. Join our ever growing community in facebook.
                </p>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.consultbtn}
                    >
                        <a
                            className={styles.joinus}
                            href="https://www.facebook.com/groups/228053842950424/?mibextid=oMANbw"
                        >Join Us</a>
                    </button>
                </div>
            </div>

            <img
                className={styles.coverPicIcon}
                alt=""
                src="/images/LandingPage/cover.jpg"
            />
        </section>
    );
}

export default Cover;