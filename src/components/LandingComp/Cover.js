import { useNavigate } from 'react-router-dom';
import styles from './Cover.module.css';

const Cover = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.cover}>
            <div className={styles.coverContent}>
                <h1 className={styles.headerTxt}>Your Partner in Dry Eye Recovery</h1>
                <p className={styles.coverTxt}>
                    Our Mission is to direct dry eye patients in right treatment plan to lead a happy and productive life. To talk with Dry Eye Expert click on “Consult today”.
                </p>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.consultbtn}
                        onClick={() => navigate('/consult')}
                    >
                        Consult today
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