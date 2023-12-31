import styles from './LoginForm.module.css';

const Login = () => {
    return (
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
                            <img className={styles.rememberMeIcon} alt="" src="/images/Login/rememberRadioBtn.svg" />
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
                    <img className={styles.socialTitleChild} alt="" src="/images/Login/horizontalLine.svg" />
                    <div className={styles.orContinueWithWrapper}>
                        or continue with
                    </div>
                </div>
                <div className={styles.socialLogin}>
                    <div className={styles.socialLoginInner}>
                        <img className={styles.frameItem} alt="" src="/images/Login/googleLogo.svg" />
                    </div>
                    <div className={styles.socialLoginInner}>
                        <img
                            className={styles.frameItem}
                            alt=""
                            src="/images/Login/facebookLogo.svg"
                        />
                    </div>
                    <div className={styles.socialLoginInner}>
                        <img className={styles.frameItem} alt="" src="/images/Login/appleLogo.svg" />
                    </div>
                </div>
            </div>
            <img
                className={styles.opthomogistConsultation1Icon}
                alt=""
                src="/images/Login/consultation.png"
            />
        </div>
    );
}
export default Login;