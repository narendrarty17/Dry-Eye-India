import styles from './Product.module.css';
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
                <div className={styles.productSizeContainer}>
                    <div className={styles.headingName}>
                        Select Size
                    </div>
                    <div className={styles.productSizes}>
                        <div className={styles.productSize}>
                            6
                        </div>
                        <div className={styles.productSize}>
                            6.5
                        </div>
                        <div className={styles.productSize}>
                            7
                        </div>
                        <div className={styles.productSize}>
                            7.5
                        </div>
                        <div className={styles.productSize}>
                            8
                        </div>
                    </div>
                </div>
                <div className={styles.productColorContainer}>
                    <div className={styles.headingName}>
                        Select Color
                    </div>
                    <div className={styles.productColors}>
                        <div className={styles.productColor} style={{ backgroundColor: '#ffc833' }} />
                        <div className={styles.productColor} style={{ backgroundColor: '#40bfff' }} />
                        <div className={styles.productColor} style={{ backgroundColor: '#fb7181' }} />
                        <div className={styles.productColor} style={{ backgroundColor: '#53b1b6' }} />
                        <div className={styles.productColor} style={{ backgroundColor: '#5c61f4' }} />
                    </div>
                </div>
                <div className={styles.specificationContainer}>
                    <div className={styles.headingName}>
                        Specification
                    </div>
                    <div className={styles.specification}>
                        <div className={styles.specificationLabel}>
                            Shown:
                        </div>
                        <div className={styles.specificationContent}>
                            Laser
                        </div>
                    </div>
                    <div className={styles.specification}>
                        <div className={styles.specificationLabel}>
                            Style:
                        </div>
                        <div className={styles.specificationContent}>
                            CD0113-400
                        </div>
                    </div>
                    <div className={styles.specificationDescParagraph}>
                        The Nike Air Max 270 React ENG combines a full-length
                        React foam midsole with a 270 Max Air unit for
                        unrivaled comfort and a strikig visual experinece.
                    </div>
                </div>
                <div className={styles.reviewContainer}>
                    <div className={styles.headingName}>
                        Review Product
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
                        <div className={styles.ratingInText}>
                            <b>4.5</b> (5 review)
                        </div>
                    </div>
                    <div className={styles.customerReview}>
                        <div className={styles.customerDetails}>
                            <img
                                className={styles.customerImg}
                                src="images/Products/Product/customerImgs/ankur.jpg"
                            />
                            <div className={styles.customerNameAndRating}>
                                <div className={styles.headingName}>James Lawson</div>
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
                            </div>
                        </div>
                        <div className={styles.reviewTxt}>
                            Air max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and scrunched the neakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favourites.
                        </div>
                        <div className={styles.reviewImgs}>
                            <img src="images/Products/Product/reviewImgs/reviewImg01.png" />
                            <img src="images/Products/Product/reviewImgs/reviewImg02.png" />
                            <img src="images/Products/Product/reviewImgs/reviewImg03.png" />
                        </div>
                        <div className={styles.reviewDate}>
                            December 10, 2016
                        </div>
                    </div>
                </div>
                <div className={styles.suggestedProductsContainer}>
                    <div className={styles.headingName}>You Might Also Like</div>
                    <div className={styles.productCards}>
                        <div className={styles.productCard}>
                            <div className={styles.productDetails}>
                                <img
                                    className={styles.suggestedProductImg}
                                    src="images/Products/Product/suggestedProducts/product01.png"
                                />
                                <div className={styles.suggestedProductName}>
                                    Nike Shoes
                                </div>
                                <div className={styles.productPrice}>
                                    $299.43
                                </div>
                                <div className={styles.productDiscount}>
                                    <div className={styles.productPreviousPrice}>
                                        $534.33
                                    </div>
                                    <div className={styles.productDiscountPercentage}>
                                        24% off
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <div className={styles.productDetails}>
                                <img
                                    className={styles.suggestedProductImg}
                                    src="images/Products/Product/suggestedProducts/product01.png"
                                />
                                <div className={styles.suggestedProductName}>
                                    Nike Shoes
                                </div>
                                <div className={styles.productPrice}>
                                    $299.43
                                </div>
                                <div className={styles.productDiscount}>
                                    <div className={styles.productPreviousPrice}>
                                        $534.33
                                    </div>
                                    <div className={styles.productDiscountPercentage}>
                                        24% off
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.addToCart}>
                    Add To Cart
                </button>
            </div>
            <Footer />
        </div>
    );
}
export default ProductTemp;