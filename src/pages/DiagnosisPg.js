import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styles from "./DiagnosisPg.module.css";
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const Splash = () => {
  const navigate = useNavigate();
  const onRectangle1Click = useCallback(() => {
    // Please sync "dashboard" to the project
  }, []);

  return (
    <div>
      <Header />
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
            onClick={() => navigate('/questions')}
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
      <Footer />
    </div>
  );
};

export default Splash;
