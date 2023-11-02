import styles from './Product.module.css';
import { products, recProducts } from './ProductsData';

const RatingRenderer = ({ numberOfTimes }) => {
    const ratingIconSrcFilled = 'images/Products/Product/star.svg';
    const ratingIconSrcHollow = 'images/Products/Product/starHollow.svg';

    // Use Array.from to create an array of length numberOfTimes
    const iconsFilled = Array.from({ length: numberOfTimes }, (_, index) => (
        <img key={index} src={ratingIconSrcFilled} alt="rating" />
    ));
    const iconsHollow = Array.from({ length: 5 - numberOfTimes }, (_, index) => (
        <img key={index} src={ratingIconSrcHollow} alt="rating" />
    ));

    return (
        <div className={styles.productOverallRating}>
            {iconsFilled}
            {iconsHollow}
        </div>
    )
}

const CustomerReviews = ({ reviews }) => {
    const customerReviews = reviews.map((review) => {
        const imgs = review.reviewImgs.map(imgURL => <img className={styles.reviewImg} src={imgURL} />);
        return (
            <div className={styles.customerReview}>
                <div className={styles.customerDetails}>
                    <img
                        className={styles.customerImg}
                        src={review.custImgURL}
                    />
                    <div className={styles.customerNameAndRating}>
                        <div className={styles.headingName}>{review.reviewer}</div>
                        <RatingRenderer numberOfTimes={review.rating} />
                    </div>
                </div>
                <div className={styles.reviewTxt}>
                    {review.review}
                </div>
                <div className={styles.reviewImgs}>
                    {imgs}
                </div>
                <div className={styles.reviewDate}>
                    {review.reviewDate}
                </div>
            </div>
        );
    });
    return (
        customerReviews
    );
}

const Product = ({ id }) => {
    const recommendedProducts = recProducts.map((product) => {
        return (
            <div className={styles.productCard}>
                <div className={styles.productDetails}>
                    <img
                        className={styles.suggestedProductImg}
                        src={product.imgURL}
                    />
                    <div className={styles.suggestedProductName}>
                        {product.name}
                    </div>
                    <div className={styles.productPrice}>
                        INR {product.price}
                    </div>
                    <div className={styles.productDiscount}>
                        <div className={styles.productPreviousPrice}>
                            INR {product.previousPrice}
                        </div>
                        <div className={styles.productDiscountPercentage}>
                            {product.discount}% off
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    const item = products.find((product) => {
        return parseInt(product.id) == parseInt(id);
    });
    const specificationParagraph = item.specification.paragraph;
    const attributes = item.specification.attributes.map((attribute) => {
        return (
            <div
                key={attribute.id}
                className={styles.specification}
            >
                <div className={styles.specificationLabel}>
                    {attribute.label}
                </div>
                <div className={styles.specificationContent}>
                    {attribute.value}
                </div>
            </div>
        );
    });
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <img
                    className={styles.backIcon}
                    src="images/Products/Product/backIcon.svg"
                />
                <div className={styles.productName}>
                    {item.name}
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
                    src={item.imgURL}
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
                        {item.name}
                    </div>
                    <RatingRenderer numberOfTimes={item.overallRating} />
                    <div className={styles.productPrice}>
                        INR {item.price}
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
                {attributes}
                <div className={styles.specificationDescParagraph}>
                    {specificationParagraph}
                </div>
            </div>
            <div className={styles.reviewContainer}>
                <div className={styles.headingName}>
                    Review Product
                </div>
                <div className={styles.productOverallRating}>
                    <RatingRenderer numberOfTimes={item.overallRating} />
                    <div className={styles.ratingInText}>
                        <b>4.5</b> (5 review)
                    </div>
                </div>
                <CustomerReviews reviews={item.reviews} />
            </div>
            <div className={styles.suggestedProductsContainer}>
                <div className={styles.headingName}>You Might Also Like</div>
                <div className={styles.productCards}>
                    {recommendedProducts}
                </div>
            </div>
            <button className={styles.addToCart}>
                Add To Cart
            </button>
        </div>
    );
}
export default Product;