import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logoimg}>
                <div className={styles.logoimgChild} />
                <b className={styles.d}>D</b>
            </div>
            <b className={styles.logotxt}>Dry Eye India</b>
        </div>
    );
}
export default Logo;