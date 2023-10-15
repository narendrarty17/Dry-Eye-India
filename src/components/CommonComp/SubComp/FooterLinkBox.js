import styles from './FooterLinkBox.module.css';

const FooterLinkBox = ({ linkHeading, links }) => {
    const linkList = links.map(link => {
        return <p key={link} className={styles.footerLink}>{link}</p>
    });
    return (
        <div>
            <h3 className={styles.linksHeader}>{linkHeading}</h3>
            <div>
                {linkList}
            </div>
        </div>
    );
}
export default FooterLinkBox;