import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styles from "./DiagnosisPg.module.css";

const Splash = () => {
  const navigate = useNavigate();
  const onRectangle1Click = useCallback(() => {
    // Please sync "dashboard" to the project
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <img alt="" src="/images/SelfDiagnosis/LetsStart/logo.svg" />
        <div className={styles.text}>Dry Eye <br /> Questionnaire</div>
      </div>
      <button
        className={styles.letsContinue}
        onClick={() => navigate('/questions')}
      >
        Let's continue
      </button>
    </div>
  );
};

export default Splash;
