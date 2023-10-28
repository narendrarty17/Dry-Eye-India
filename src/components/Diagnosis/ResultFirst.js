import styles from './ResultFirst.module.css';

const ResultFirst = () => {
    return (
        <div
            className={styles.resultCardContainer}
        >
            <div className={styles.resultCard}>
                <div className={styles.mainContent}>
                    <img
                        className={styles.titleImg}
                        src="/images/SelfDiagnosis/Result/emojis/sad.svg"
                    />
                    <div className={styles.titleTxt}>Result</div>
                    <div className={styles.contentTxt}>
                        Your OSDI score is <b>28</b> which indicates that you
                        have moderate dry eyes. To identify which kind of dry
                        eye you have click on more testing.
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <button className={styles.allowBtn}>More testing</button>
                    <button className={styles.skipBtn}>Skip for now</button>
                </div>
            </div>
        </div>
    );
}
export default ResultFirst;