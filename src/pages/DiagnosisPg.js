import { useCallback } from "react";
import styles from "./DiagnosisPg.module.css";

const Splash = () => {
  const onRectangle1Click = useCallback(() => {
    // Please sync "dashboard" to the project
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <img alt="" src="/images/SelfDiagnosis/LetsStart/logo.svg" />
        <div className={styles.text}>Dry Eye <br /> Questionnaire</div>
      </div>
      <button className={styles.letsContinue}>
        Let's continue
      </button>
    </div>
  );
};

export default Splash;
