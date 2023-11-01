import styles from './Products.module.css';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const products = [
    {
        id: 0,
        name: 'Moisture Chamber Goggles',
        price: 2000,
        previousPrice: 4000,
        discount: 50,
        imgURL: 'images/Products/productImgs/01_Moisture_Chamber_Goggles.jpg'
    },
    {
        id: 1,
        name: 'Manuka Honey Gel',
        price: 2000,
        previousPrice: 3000,
        discount: 33,
        imgURL: 'images/Products/productImgs/02_Manuka_Honey_Gel.jpg'
    },
    {
        id: 2,
        name: 'Manuka Honey Drops',
        price: 1000,
        previousPrice: 1500,
        discount: 33,
        imgURL: 'images/Products/productImgs/03_Manuka_Honey_Drops.jpg'
    },
    {
        id: 3,
        name: 'Omega 3 Capsules',
        price: 500,
        previousPrice: 1000,
        discount: 50,
        imgURL: 'images/Products/productImgs/04_Omega_3.jpg'
    },
    {
        id: 4,
        name: 'Anxiety Supplement',
        price: 800,
        previousPrice: 1000,
        discount: 20,
        imgURL: 'images/Products/productImgs/05_Anxiety_Supplement.jpg'
    },
    {
        id: 5,
        name: 'Lactoferrin',
        price: 600,
        previousPrice: 1000,
        discount: 40,
        imgURL: 'images/Products/productImgs/06_Lactoferrin.jpg'
    },
    {
        id: 6,
        name: 'Eyelid Cleanser',
        price: 600,
        previousPrice: 1000,
        discount: 40,
        imgURL: 'images/Products/productImgs/07_Eyelid_Cleanser.jpg'
    },
    {
        id: 7,
        name: 'Rosewater',
        price: 200,
        previousPrice: 100,
        discount: 50,
        imgURL: 'images/Products/productImgs/08_Rosewater.jpg'
    }
]

const recProducts = [
    {
        id: 0,
        name: 'Moisture Chamber Goggles',
        price: 2000,
        previousPrice: 4000,
        discount: 50,
        imgURL: 'images/Products/productImgs/01_Moisture_Chamber_Goggles.jpg'
    },
    {
        id: 1,
        name: 'Manuka Honey Gel',
        price: 2000,
        previousPrice: 3000,
        discount: 33,
        imgURL: 'images/Products/productImgs/02_Manuka_Honey_Gel.jpg'
    }
]
const categories = [
    {
        id: 0,
        name: 'Accessories',
        imgURL: 'images/Products/categoryIcons/01_Eye_Accessories.jpg'
    },
    {
        id: 1,
        name: 'Drops/Ointment',
        imgURL: 'images/Products/categoryIcons/02_Eye_Drops_Ointment.jpg'
    },
    {
        id: 2,
        name: 'Supplements',
        imgURL: 'images/Products/categoryIcons/03_Eye_Supplements.jpg'
    }
];

const Products = () => {
    const productList = products.map((product) => {
        return (
            <div className={styles.productCard}>
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
            <div className={styles.productCard}>
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
            <div className={styles.category}>
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
            <Footer />
        </div>
    );
}
export default Products;