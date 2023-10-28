import styles from './DiagnosisWel.module.css';

const DiagnosisWel = ({ startClickHandler }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>
                    <span>Do you have dry eyes?</span>
                    <span>Check now</span>
                </div>
                <div className={styles.mainTxt}>
                    <span>Answer few simple questions,</span>
                    <span>to know what kind of dry eye </span>
                    <span>you have, and How to manage it.</span>
                </div>
                <button
                    className={styles.letsStarted}
                    onClick={startClickHandler}
                >
                    Let's Started
                </button>
            </div>
            <img
                className={styles.welcomeIconMobile}
                src="images/SearchDoctor/welcome.png"
            />
            <img
                className={styles.welcomeIconDesktop}
                src="images/SearchDoctor/diagnosis_desktop.jpeg"
            />
        </div>
    )
}
export default DiagnosisWel;