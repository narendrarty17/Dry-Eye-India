import styles from './Articles.module.css';
import Article from './SubComp/Article';

const articlesData = [
    {
        'articleImg': '/images/LandingPage/articleImgs/articleImg1.jpg',
        'articleTitle': 'How to diagnose at doctors clinic',
        'articleContent': 'In this case the role of the health labaratory is very important to do a disease detection...',
    },
    {
        'articleImg': '/images/LandingPage/articleImgs/articleImg2.jpg',
        'articleTitle': 'Herbal medicines to reduce ocular inflammation',
        'articleContent': 'Herbal medicines are widely used to alleviate various symptoms related to dry eye...',
    },
    {
        'articleImg': '/images/LandingPage/articleImgs/articleImg3.jpg',
        'articleTitle': 'Safe facial for dry eye patients',
        'articleContent': 'Alove vera facial is very good for removing dead skin cells from your face without exacerbating dry eye symptoms...',
    }
];

const Articles = () => {
    const articles = articlesData.map(articleData => {
        return (
            <Article
                key={articleData.articleTitle}
                articleImg={articleData.articleImg}
                articleTitle={articleData.articleTitle}
                articleContent={articleData.articleContent}
            />
        )
    }
    )
    return (
        <section className={styles.articlesContainer}>
            <h3 className={styles.headerTxt}>
                Check out our latest article
            </h3>
            <img
                className={styles.underline}
                alt=""
                src="/images/LandingPage/underline.svg"
            />
            <div className={styles.articles}>
                {articles}
            </div>
            <button className={styles.viewallbtn}>
                <b className={styles.viewallbtntxt}>View all</b>
            </button>
        </section>
    );
};
export default Articles;