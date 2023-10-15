import { useNavigate } from 'react-router-dom';
import styles from './SideNav.module.css';

const SideNav = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.navbar}>
            <div
                className={styles.logoimg}
                onClick={() => navigate('/')}
            >
                <div className={styles.logoimgChild} />
                <b className={styles.d}>D</b>
            </div>
            <div className={styles.navbtns}>
                <img
                    className={styles.navIcon}
                    onClick={() => navigate('/')}
                    alt="" src="/images/BlogPost/sideNavIcons/home.svg"
                />
                <img className={styles.navIcon} alt="" src="/images/BlogPost/sideNavIcons/bell.svg" />
                <img className={styles.navIcon} alt="" src="/images/BlogPost/sideNavIcons/bookmark.svg" />
                <div className={styles.navDividerLine} />
                <img className={styles.navIcon} alt="" src="/images/BlogPost/sideNavIcons/edit.svg" />
            </div>
        </div>
    );
}
export default SideNav;