import styles from './ProductTemp.module.css';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const ProductTemp = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <img
                        className={styles.backIcon}
                        src="images/Products/Product/backIcon.svg"
                    />
                    <div className={styles.productName}>
                        Nike Air Max 270 Rea...
                    </div>
                    <div className={styles.placeholder} />
                    <img
                        className={styles.searchIcon}
                        src="images/Products/Product/searchIcon.svg"
                    />
                    <img
                        className={styles.verticalDots}
                        src="images/Products/Product/verticalDotsIcon.svg"
                    />
                </div>
                <div className={styles.productImgContainer}>
                    <img
                        className={styles.productImg}
                        src="images/Products/Product/productImgs/product_01.png"
                    />
                    <div className={styles.slider}>
                        <div className={styles.slidingIcon} />
                        <div className={styles.slidingIcon} />
                        <div className={styles.slidingIconSelected} />
                        <div className={styles.slidingIcon} />
                        <div className={styles.slidingIcon} />
                    </div>
                </div>
                <div className={styles.productDetailContainer}>
                    <div className={styles.productDetail}>
                        <div className={styles.productName}>
                            Nike Air Zoom Pegasus 36 Miami
                        </div>
                        <div className={styles.productOverallRating}>
                            <img
                                className={styles.star}
                                src="images/Products/Product/star.svg"
                            />
                            <img
                                className={styles.star}
                                src="images/Products/Product/star.svg"
                            />
                            <img
                                className={styles.star}
                                src="images/Products/Product/star.svg"
                            />
                            <img
                                className={styles.star}
                                src="images/Products/Product/star.svg"
                            />
                            <img
                                className={styles.star}
                                src="images/Products/Product/starHollow.svg"
                            />
                        </div>
                        <div className={styles.productPrice}>
                            $299,43
                        </div>
                    </div>
                    <img
                        className={styles.like}
                        src="images/Products/Product/like.svg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ProductTemp;