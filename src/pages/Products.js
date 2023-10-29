import styles from './Products.module.css';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const Products = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.topbar}>
                    <div className={styles.searchbar}>
                        <img
                            className={styles.searchIcon}
                            src="images/Products/topbar/search.svg"
                        />
                        <input
                            className={styles.searchinput}
                            type="text"
                            placeholder="Search Product"
                        />
                    </div>
                    <img
                        className={styles.topbarSideIcon}
                        src="/images/Products/topbar/love.svg"
                    />
                    <img
                        className={styles.topbarSideIcon}
                        src="/images/Products/topbar/notification.svg"
                    />
                </div>
                <div className={styles.promotionContainer}>
                    <div className={styles.promotionImg}>
                        <h2 className={styles.promotionImgTxt}>
                            Super Flash Sale<br />
                            50% off
                        </h2>
                        <h4 className={styles.promotionCountDown}>
                            <div className={styles.countDownBox}>08</div>
                            <div className={styles.countDownBox}>34</div>
                            <div className={styles.countDownBox}>52</div>
                        </h4>
                    </div>
                    <ul className={styles.sliderIcons}>
                        <li className={styles.sliderIcon} />
                        <li className={styles.sliderIcon} />
                        <li className={styles.sliderIconSelected} />
                        <li className={styles.sliderIcon} />
                        <li className={styles.sliderIcon} />
                    </ul>
                </div>
                <div className={styles.categoryContainer}>
                    <div className={styles.categoryHeader}>
                        <h4 className={styles.categoryLeftHeading}>Category</h4>
                        <h4 className={styles.categoryRightHeading}>More Category</h4>
                    </div>
                    <div className={styles.categories}>
                        <div className={styles.category}>
                            <div className={styles.categoryIconContainer}>
                                <img
                                    className={styles.categoryIcon}
                                    src="images/Products/categoryIcons/shirt.svg"
                                />
                            </div>
                            <div className={styles.categoryName}>Man Shirt</div>
                        </div>
                        <div className={styles.category}>
                            <div className={styles.categoryIconContainer}>
                                <img
                                    className={styles.categoryIcon}
                                    src="images/Products/categoryIcons/dress.svg"
                                />
                            </div>
                            <div className={styles.categoryName}>Dress</div>
                        </div>
                        <div className={styles.category}>
                            <div className={styles.categoryIconContainer}>
                                <img
                                    className={styles.categoryIcon}
                                    src="images/Products/categoryIcons/manBag.svg"
                                />
                            </div>
                            <div className={styles.categoryName}>Man Bag</div>
                        </div>
                        <div className={styles.category}>
                            <div className={styles.categoryIconContainer}>
                                <img
                                    className={styles.categoryIcon}
                                    src="images/Products/categoryIcons/womanBag.svg"
                                />
                            </div>
                            <div className={styles.categoryName}>Bag</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products;