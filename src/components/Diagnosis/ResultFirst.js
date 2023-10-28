import { useNavigate } from 'react-router-dom';
import styles from './ResultFirst.module.css';

const ResultFirst = ({ osdiScore }) => {
    const navigate = useNavigate();
    let resultCardHeight = '450px';
    let severity;
    let severityImg;
    if (osdiScore <= 12) {
        severity = 'no';
        severityImg = 'happy.svg';
        resultCardHeight = '350px';
    }
    else if (osdiScore >= 13 && osdiScore <= 22) {
        severity = 'mild';
        severityImg = 'mildlySad.svg';
    }
    else if (osdiScore >= 23 && osdiScore <= 32) {
        severity = 'moderate';
        severityImg = 'sad.svg';
    }
    else {
        severity = 'severe';
        severityImg = 'extremelySad.svg';
    }
    console.log(severity);
    const titleImgSrc = `/images/SelfDiagnosis/Result/emojis/${severityImg}`;
    return (
        <div
            className={styles.resultCardContainer}
        >
            <div
                className={styles.resultCard}
                style={{ height: resultCardHeight }}
            >
                <div className={styles.mainContent}>
                    <img
                        className={styles.titleImg}
                        src={titleImgSrc}
                    />
                    <div className={styles.titleTxt}>Result</div>
                    <div className={styles.contentTxt}>
                        Your OSDI score is <b>{osdiScore}</b>&nbsp;
                        which indicates that you
                        have <b>{severity}</b> dry eyes.
                        {osdiScore > 12 ? 'To identify which kind of dry eye click on more testing.' : ''}
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    {
                        osdiScore > 12 ?
                            <button className={styles.allowBtn}>More testing</button>
                            :
                            <button
                                className={styles.allowBtn}
                                onClick={() => navigate('/')}
                            >
                                Return Homepage
                            </button>
                    }
                    {
                        osdiScore > 12 ?
                            <button className={styles.skipBtn}>Skip for now</button>
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    );
}
export default ResultFirst;