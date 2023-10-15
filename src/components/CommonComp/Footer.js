import styles from './Footer.module.css';
import FooterLinkBox from './SubComp/FooterLinkBox';
import FooterMobile from './FooterMobile';

const FooterLinkBoxes = [
    {
        'heading': 'Company',
        'links': ['About', 'Testimonials', 'Find a doctor', 'Apps']
    },
    {
        'heading': 'Region',
        'links': ['India', 'Singapore', 'Hongkong', 'Canada']
    },
    {
        'heading': 'Help',
        'links': ['Help center', 'Contact support', 'Instructions', 'How it works']
    }
]

const Footer = () => {
    const linkBoxes = FooterLinkBoxes.map(linkBox => {
        return (
            <div key={linkBox.heading} className={styles.footerLinks}>
                <FooterLinkBox
                    key={linkBox.heading}
                    linkHeading={linkBox.heading}
                    links={linkBox.links}
                />
            </div>
        )
    })
    return (
        <div>
            <section className={styles.footerDesktop}>
                <div className={styles.footerMain}>
                    <div className={styles.logo}>
                        <div className={styles.logoimg}>
                            <div className={styles.logoimgChild} />
                            <b className={styles.d}>D</b>
                        </div>
                        <b className={styles.logotxt}>Dry Eye India</b>
                    </div>
                    <p className={styles.footerDescText}>
                        Our platform acts as a single place for all our dry eye patients needs. Be
                        it consultation, counselling or it could be your dry eye kit/accessories,
                        we provide it all.
                    </p>
                    <p className={styles.copyrightText}>
                        ©Dry Eye India PTY LTD 2023. All rights reserved
                    </p>
                </div>
                <div />
                <div />
                {linkBoxes}
            </section>
            <section className={styles.footerMobile}>
                <FooterMobile />
            </section>
        </div>
    );
};

export default Footer;