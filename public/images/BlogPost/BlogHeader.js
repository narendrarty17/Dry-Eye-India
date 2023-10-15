import styles from './BlogHeader.module.css';

const BlogHeader = () => {
    return (
        <div className={styles.blogheader}>
            <div className={styles.headerLeft}>
                <img
                    className={styles.authorImgBlogHeader}
                    alt=""
                    src="/BlogPost/authorImg.png"
                />
                <div className={styles.authorDetailsHeader}>
                    <div className={styles.authorName}>Maria Lawrence</div>
                    <div className={styles.dateReadListen}>
                        <div className={styles.date}>Jul 31, 2021</div>
                        <div className={styles.fullStop}>&nbsp;&middot;&nbsp;</div>
                        <div className={styles.minRead}>5 min read</div>
                        <div className={styles.play}>
                            <img className={styles.playbtnIcon} alt="" src="/BlogPost/playbtn.svg" />
                            <div className={styles.listen}>Listen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.headersociallogo}>
                <img className={styles.linkedinIcon} alt="" src="/mdilinkedin.svg" />
                <img className={styles.linkedinIcon} alt="" src="/facebook.svg" />
                <img className={styles.linkedinIcon} alt="" src="/twitter.svg" />
                <img className={styles.linkedinIcon} alt="" src="/phlinkbold.svg" />
                <div className={styles.line} />
                <img className={styles.bookmark} alt="" src="/bookmark1.svg" />
            </div>
        </div>
    );
}
export default BlogHeader;