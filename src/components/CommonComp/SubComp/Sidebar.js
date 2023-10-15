import { useNavigate } from 'react-router-dom';

import Logo from "./Logo";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.light}>
      <div className={styles.sidebarOpen}>
        {/* Header */}
        <div className={styles.header}>
          <Logo />
          <button
            className={styles.navIconButton}
            onClick={props.toggleSidebar}
          >
            <img src="/images/LandingPage/navbar.svg" alt="navbar" />
          </button>
        </div>
        {/* Divider */}
        <div className={styles.divider} />
        {/* Navigation Main */}
        <div className={styles.navigation}>
          <div className={styles.title}>
            <div className={styles.overline}>
              Main
            </div>
          </ div>
          <div className={styles.link}>
            <img
              className={styles.linkIcon}
              src="/images/Header/sideBar/home.svg"
            />
            <div
              className={styles.linkLabel}
            >Home</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.linkIcon}
              alt=""
              src="/images/Header/sideBar/login.svg"
            />
            <div
              className={styles.linkLabel}
              onClick={() => navigate('/consult')}
            >
              Log in</div>
            <img className={styles.iconMore} alt="" src="/images/Header/sideBar/dropDownClosed.svg" />
          </div>
          <div
            className={styles.link}
            onClick={() => navigate('/consult')}
          >
            <img
              className={styles.linkIcon}
              alt=""
              src="/images/Header/sideBar/findDoc.svg"
            />
            <div className={styles.label}>Find a doctor</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.linkIcon}
              alt=""
              src="/images/Header/sideBar/selfDiagnosis.svg"
            />
            <div
              className={styles.label}
              onClick={() => navigate('/blogpost')}
            >Blogs</div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.linkHighlighted}>
              <img
                className={styles.linkIcon}
                alt=""
                src="/images/Header/sideBar/products.svg"
              />
              <div className={styles.linkLabelHighlighted}>Products</div>
              <img className={styles.iconMore} alt="" src="/images/Header/sideBar/dropDownOpen.svg" />
            </div>
            <div className={styles.linksContainer}>
              <div className={styles.containerLink}>
                <div className={styles.containerLinkLabel}>Dry Eye Spectacles</div>
              </div>
              <div className={styles.containerLinkSelected}>
                <div className={styles.containerLinkLabelSelected}>Supplements</div>
              </div>
              <div className={styles.containerLink}>
                <div className={styles.containerLinkLabel}>Manuka Honey Gel/Drop</div>
              </div>
              <div className={styles.containerLink}>
                <div className={styles.containerLinkLabel}>Seleniex</div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Settings */}
        <div className={styles.navigation}>
          <div className={styles.title}>
            <div className={styles.overline}>
              Settings
            </div>
          </ div>
          <div className={styles.link}>
            <img
              className={styles.linkIcon}
              alt=""
              src="/images/Header/sideBar/notifications.svg"
            />
            <div className={styles.linkLabel}>Notification</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.linkIcon}
              alt=""
              src="/images/Header/sideBar/settings.svg"
            />
            <div className={styles.linkLabel}>Settings</div>
            <img className={styles.iconMore} alt="" src="/images/Header/sideBar/dropDownClosed.svg" />
          </div>
        </div>
        {/* footer */}
        <div className={styles.footer}>
          <div className={styles.switch}>
            <div className={styles.link}>
              <img
                className={styles.socialMediaIcon}
                alt=""
                src="/images/Header/sideBar/socialMedia/facebookLogo.svg"
              />
            </div>
            <div className={styles.link}>
              <img
                className={styles.socialMediaIcon}
                alt=""
                src="/images/Header/sideBar/socialMedia/whatsappLogo.svg"
              />
            </div>
            <div className={styles.link}>
              <img
                className={styles.socialMediaIcon}
                alt=""
                src="/images/Header/sideBar/socialMedia/instagramLogo.svg"
              />
            </div>
            <div className={styles.link}>
              <img
                className={styles.socialMediaIcon}
                alt=""
                src="/images/Header/sideBar/socialMedia/youtubeLogo.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
