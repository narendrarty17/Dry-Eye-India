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
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionHeader}>
                        <h4 className={styles.sectionLeftHeading}>Category</h4>
                        <h4 className={styles.sectionRightHeading}>More Category</h4>
                    </div>
                    <div className={styles.categories}>
                        <div className={styles.category}>
                            <div className={styles.categoryIconContainer}>
                                <img
                                    className={styles.categoryIcon}
                                    src="images/Products/categoryIcons/shirt.svg"
                                />
                            </div>
                            <div className={styles.categoryName}>Shirt</div>
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
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionHeader}>
                        <h4 className={styles.sectionLeftHeading}>Flash Sale</h4>
                        <h4 className={styles.sectionRightHeading}>See More</h4>
                    </div>
                    <div className={styles.productCards}>
                        <div className={styles.productCard}>
                            <img
                                className={styles.productImg}
                                src="images/Products/productImgs/bag.png"
                            />
                            <div className={styles.productDetails}>
                                <div className={styles.productName}>
                                    <b>FS-Nike Air Max 270</b>
                                </div>
                                <div className={styles.productPrice}>
                                    $299.43
                                </div>
                                <div className={styles.productDiscountContainer}>
                                    <div className={styles.previousPrice}>$534</div>
                                    <div className={styles.productDiscount}>24% off</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <img
                                className={styles.productImg}
                                src="images/Products/productImgs/wallet.png"
                            />
                            <div className={styles.productDetails}>
                                <div className={styles.productName}>
                                    <b>MS-Nike Air Pro...</b>
                                </div>
                                <div className={styles.productPrice}>
                                    $299.43
                                </div>
                                <div className={styles.productDiscountContainer}>
                                    <div className={styles.previousPrice}>$534</div>
                                    <div className={styles.productDiscount}>24% off</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Products;