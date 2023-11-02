import { products, recProducts, categories } from "./ProductsData";
import styles from './ProductHomepage.module.css';

const ProductHomepage = ({ productClickHandler }) => {
    const productList = products.map((product) => {
        return (
            <div
                key={product.id}
                className={styles.productCard}
                onClick={() => productClickHandler(product.id)}
            >
                <img
                    className={styles.productImg}
                    src={product.imgURL}
                />
                <div className={styles.productDetails}>
                    <div className={styles.productName}>
                        <b>{product.name}</b>
                    </div>
                    <div className={styles.productPrice}>
                        INR {product.price}
                    </div>
                    <div className={styles.productDiscountContainer}>
                        <div className={styles.previousPrice}>INR {product.previousPrice}</div>
                        <div className={styles.productDiscount}>{product.discount}% off</div>
                    </div>
                </div>
            </div>
        );
    })
    const recProductList = recProducts.map((product) => {
        return (
            <div
                key={product.id}
                className={styles.productCard}
            >
                <img
                    className={styles.productImg}
                    src={product.imgURL}
                />
                <div className={styles.productDetails}>
                    <div className={styles.productName}>
                        <b>{product.name}</b>
                    </div>
                    <div className={styles.productPrice}>
                        INR {product.price}
                    </div>
                    <div className={styles.productDiscountContainer}>
                        <div className={styles.previousPrice}>INR {product.previousPrice}</div>
                        <div className={styles.productDiscount}>{product.discount}% off</div>
                    </div>
                </div>
            </div>
        );
    })
    const categoryList = categories.map((category) => {
        return (
            <div
                key={category.id}
                className={styles.category}
            >
                <div className={styles.categoryIconContainer}>
                    <img
                        className={styles.categoryIcon}
                        src={category.imgURL}
                    />
                </div>
                <div className={styles.categoryName}>{category.name}</div>
            </div>
        );
    });
    return (
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
            <div className={styles.flashCardContainer}>
                <div className={styles.flashImgPromotion}>
                    <h2 className={styles.flashImgHeaderTxt}>
                        Super Flash Sale<br />
                        50% off
                    </h2>
                    <h4 className={styles.flashImgCountDown}>
                        <div className={styles.flashImgCountDownBox}>08</div>
                        <div className={styles.flashImgCountDownBox}>34</div>
                        <div className={styles.flashImgCountDownBox}>52</div>
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
                    {categoryList}
                </div>
            </div>
            <div className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h4 className={styles.sectionLeftHeading}>Our Products</h4>
                    <h4 className={styles.sectionRightHeading}>See More</h4>
                </div>
                <div className={styles.productCards}>
                    {productList}
                </div>
            </div>
            <div className={styles.flashCardContainer}>
                <div className={styles.flashImgRecommend}>
                    <h2 className={styles.flashImgHeaderTxt}>
                        Recommended<br />
                        Product
                    </h2>
                    <div className={styles.flashImgTxt}>
                        We recommend the best for you
                    </div>
                </div>
            </div>
            <div className={styles.sectionContainer}>
                <div className={styles.productCards}>
                    {recProductList}
                </div>
            </div>
        </div>
    );
}
export default ProductHomepage;