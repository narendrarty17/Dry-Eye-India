import styles from './BlogHeader.module.css';

const BlogHeader = () => {
    return (
        <div className={styles.blogheader}>
            <div className={styles.headerLeft}>
                <img
                    className={styles.authorImgBlogHeader}
                    alt=""
                    src="/images/BlogPost/authorImg.png"
                />
                <div className={styles.authorDetailsHeader}>
                    <div className={styles.authorName}>Maria Lawrence</div>
                    <div className={styles.dateReadListen}>
                        <div className={styles.date}>Jul 31, 2021</div>
                        <div className={styles.fullStop}>&nbsp;&middot;&nbsp;</div>
                        <div className={styles.minRead}>5 min read</div>
                        <div className={styles.play}>
                            <img className={styles.playbtnIcon} alt="" src="/images/BlogPost/playbtn.svg" />
                            <div className={styles.listen}>Listen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.headersociallogo}>
                <img className={styles.linkedinIcon} alt="" src="/images/BlogPost/socialMedia/linkedin.svg" />
                <img className={styles.linkedinIcon} alt="" src="/images/BlogPost/socialMedia/facebook.svg" />
                <img className={styles.linkedinIcon} alt="" src="/images/BlogPost/socialMedia/twitter.svg" />
                <img className={styles.linkedinIcon} alt="" src="/images/BlogPost/socialMedia/link.svg" />
                <div className={styles.line} />
                <img className={styles.bookmark} alt="" src="/images/BlogPost/bookmark.svg" />
            </div>
        </div>
    );
}
export default BlogHeader;