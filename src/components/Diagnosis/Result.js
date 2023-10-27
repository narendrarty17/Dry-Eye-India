import styles from "./Result.module.css";

const RiskAssessment = ({ osdiValue }) => {
  return (
    <div className={styles.result}>
      <div className={styles.topHeader}>
        <img
          className={styles.vectorIcon}
          alt="" src="/images/SelfDiagnosis/Result/backArrow.svg"
        />
        <h3>Results</h3>
      </div>
      <div className={styles.executiveSummary}>
        <div className={styles.theChanceOf}>
          The chance of you developing lung cancer in the next 6 years is 0.4%.
          Talk to your doctor about the option to screen or not to screen as they
          will understand your situation best.
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.statsHeader}>Your OSDI Score is : {osdiValue}</div>
        <div className={styles.mainContentStats}>
          <img className={styles.statPieIcon} alt="" src="/images/SelfDiagnosis/Result/pieChart.svg" />
          <div className={styles.bulletPoints}>
            <div className={styles.bullet}>
              <div className={styles.bulletPoint} />0.4%
            </div>
            <div className={styles.bullet}>
              <div className={styles.bulletPoint} />2%
            </div>
            <div className={styles.bullet}>
              <div className={styles.bulletPoint} />10%
            </div>
            <div className={styles.bullet}>
              <div className={styles.bulletPoint} />15%</div>
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.reportContainer}>
        <div className={styles.reportHeader}>Detailed Report</div>
        <div className={styles.reportContent}>
          <ul className={styles.reportList}>
            <li>
              Fewer than 10% of the lung cancer detected by screening are believed
              to be overdiagnosed*.
            </li>
            <li>
              Fewer than 10% of the lung cancer detected by screening are believed
              to be overdiagnosed*.
            </li>
            <li>
              Fewer than 10% of the lung cancer detected by screening are believed
              to be overdiagnosed*.
            </li>
            <li>
              Fewer than 10% of the lung cancer detected by screening are believed
              to be overdiagnosed*.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
