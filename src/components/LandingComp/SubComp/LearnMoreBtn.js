import styles from "./LearnMoreBtn.module.css";

const LearnMoreBtn = () => {
  return (
    <button className={styles.learnmorebtn}>
      <b className={styles.learnmoretxt}>Learn more</b>
    </button>
  );
};

export default LearnMoreBtn;
