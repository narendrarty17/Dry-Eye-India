import { useMemo } from "react";
import styles from "./Article.module.css";

const Article = ({ articleImg, articleTitle, articleContent }) => {

  return (
    <div className={styles.article}>
      <img
        className={styles.article01ImgIcon}
        alt=""
        src={articleImg}
      />
      <div className={styles.articleContent}>
        <div className={styles.headerAndTxtContainer}>
          <h3 className={styles.articleHeader}>
            {articleTitle}
          </h3>
          <p className={styles.articleTxt}>
            {articleContent}
          </p>
        </div>
        <button className={styles.readmorebtn}>Read more</button>
      </div>
    </div>
  );
};

export default Article;
