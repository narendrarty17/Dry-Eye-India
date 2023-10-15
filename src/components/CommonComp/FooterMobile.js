import styles from "./FooterMobile.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <div className={styles.logoimg}>
          <div className={styles.logoimgChild} />
          <b className={styles.d}>D</b>
        </div>
        <b className={styles.logotxt}>Dry Eye India</b>
      </div>
      <div className={styles.nav}>
        <div className={styles.home}>Home</div>
        <div className={styles.home}>About</div>
        <div className={styles.home}>Docs</div>
        <div className={styles.home}>GitHub</div>
      </div>
      <div className={styles.socialMedia}>
        <img
          className={styles.socialMediaImg}
          alt=""
          src="/images/Footer/SocialMedia/facebook.svg"
        />
        <img
          className={styles.socialMediaImg}
          alt=""
          src="/images/Footer/SocialMedia/instagram.svg"
        />
        <img
          className={styles.socialMediaImg}
          alt=""
          src="/images/Footer/SocialMedia/linkedin.svg"
        />
        <img
          className={styles.socialMediaImg}
          alt=""
          src="/images/Footer/SocialMedia/twitter.svg"
        />
        <img
          className={styles.socialMediaImg}
          alt=""
          src="/images/Footer/SocialMedia/whatsapp.svg"
        />
        <img
          className={styles.socialMediaImg}
          alt=""
          src="/images/Footer/SocialMedia/youtube.svg"
        />
      </div>
      <div className={styles.copyright}>
        © Copyright 2021 Nextjs Starter. Powered with ♥ by
        <div className={styles.creativedesignsguru}>CreativeDesignsGuru</div>
      </div>
    </div>
  );
};

export default Footer;
