import styles from "./QuestionCard.module.css";
import { useNavigate } from "react-router-dom";

const QuestionCard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.questioncard}>
        <div className={styles.header}>
          <div className={styles.aboveProgressBarPart}>
            <div className={styles.userContainer}>
              <img className={styles.userIcon} alt="" src="/images/SelfDiagnosis/Question/userIcon.svg" />
              <div className={styles.userdetails}>
                <div className={styles.username}>Angelo Fagalto</div>
                <div className={styles.usermetadata}>CEO @Lono</div>
              </div>
            </div>
            <img
              className={styles.btncloseIcon}
              alt=""
              src="/images/SelfDiagnosis/Question/btnCloseIcon.svg"
            />
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressBarChild} />
            <div className={styles.progressBarItem} />
            <div className={styles.progressBarItem} />
            <div className={styles.progressBarItem} />
            <div className={styles.progressBarItem} />
          </div>
        </div>
        <div className={styles.maincontent}>
          <div className={styles.questionStatement}>
            What if...you could choose our next feature development? What should
            it be regarding your needs?
          </div>
          <div className={styles.radioOptions}>
            <div className={styles.multipleChoiceQuestion}>
              <div className={styles.optionTxt}>Feature A</div>
            </div>
            <div className={styles.multipleChoiceQuestion}>
              <div className={styles.optionTxt}>Feature B</div>
            </div>
            <div className={styles.multipleChoiceQuestion}>
              <div className={styles.optionTxt}>Feature C</div>
            </div>
            <div className={styles.multipleChoiceOtherChoice}>
              <div className={styles.optionTxt}>
                <span>|</span>
                <span className={styles.typeYourAnswer}>Type your answer</span>
              </div>
              <img
                className={styles.checkboxIcon}
                alt=""
                src="/images/SelfDiagnosis/Question/checkBoxIcon.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <img className={styles.toldLogoIcon} alt="" src="/images/SelfDiagnosis/Question/companyLogo.svg" />
          <div className={styles.footerChild} />
          <div className={styles.btnContainer}>
            <div className={styles.previousbtn}>
              <div className={styles.myButton}>Previous</div>
            </div>
            <div
              className={styles.nextbtn}
              onClick={() => navigate('/results')}
            >
              <div className={styles.myButton}>Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
