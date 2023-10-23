import styles from "./BlogPost.module.css";

import SideNav from '../components/BlogPostComp/SideNav';
import BlogHeader from "../components/BlogPostComp/BlogHeader";
import BlogArticleTest from '../components/BlogPostComp/BlogArticleTest';
import BlogArticle from '../components/BlogPostComp/BlogArticle';
import BlogSidebar from '../components/BlogPostComp/BlogSidebar';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const BlogPost = () => {
  return (
    <div>
      <Header />
      <div className={styles.blogPost}>
        <BlogArticle />
        <div className={styles.placeholder} />
        <div className={styles.sectionsSeperator} />
        <BlogSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
