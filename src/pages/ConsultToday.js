import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import styles from "./ConsultToday.module.css";

const ConsultToday = () => {
  return (
    <div className={styles.consultContainer}>
      <Header />
      <div className={styles.main}>
        <div className={styles.login}>
          {/* Above login form text */}
          <div className={styles.aboveLoginTxt}>
            <div className={styles.welcomeBack}>WELCOME BACK!</div>
            <div className={styles.dontHaveAcc}>
              Don’t have a account,
              <b className={styles.signUp}>Sign up</b>
            </div>
          </div>

          {/* Login Form */}
          <div className={styles.inputField}>
            <div className={styles.usernameAndPasswordContainer}>
              <div className={styles.username}>
                <div className={styles.usernameLabel}>Username</div>
                <input
                  className={styles.usernameInput}
                  name="username"
                  placeholder="deniel123@gmail.com"
                  type="email"
                />
              </div>
              <div className={styles.password}>
                <div className={styles.passwordLabel}>Password</div>
                <input
                  className={styles.passwordInput}
                  name="password"
                  placeholder="**********"
                  type="password"
                />
              </div>
            </div>
            <div className={styles.rememberAndForgotContainer}>
              <div className={styles.rememberMeWrapper}>
                <img className={styles.rememberMeIcon} alt="" src="/images/consult/rememberRadioBtn.svg" />
                <div className={styles.rememberMe}>Remember me</div>
              </div>
              <div className={styles.forgetPasswordWrapper}>
                <div className={styles.forgetPassword}>Forget password?</div>
              </div>
            </div>
          </div>
          <button className={styles.signIn}>
            Sign In
          </button>

          <div className={styles.socialTitle}>
            <img className={styles.socialTitleChild} alt="" src="/images/consult/horizontalLine.svg" />
            <div className={styles.orContinueWithWrapper}>
              or continue with
            </div>
          </div>
          <div className={styles.socialLogin}>
            <div className={styles.socialLoginInner}>
              <img className={styles.frameItem} alt="" src="/images/consult/googleLogo.svg" />
            </div>
            <div className={styles.socialLoginInner}>
              <img
                className={styles.frameItem}
                alt=""
                src="/images/consult/facebookLogo.svg"
              />
            </div>
            <div className={styles.socialLoginInner}>
              <img className={styles.frameItem} alt="" src="/images/consult/appleLogo.svg" />
            </div>
          </div>
        </div>
        <img
          className={styles.opthomogistConsultation1Icon}
          alt=""
          src="/images/consult/consultation.png"
        />
      </div>
      < Footer />
    </div >
  );
};

export default ConsultToday;
