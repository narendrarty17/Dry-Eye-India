import styles from './AddToCart.module.css';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const AddToCart = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.heading}>Your Cart</div>
                <div className={styles.horizontalLine} />
                <div className={styles.productCards}>
                    <div className={styles.productCard}>
                        <img
                            className={styles.productImg}
                            src="images/Products/cart/cartItems/cartItem01.png"
                        />
                        <div className={styles.productDetails}>
                            <div className={styles.productName}>
                                Nike Air Zoom Pegasus 36 Miami
                            </div>
                            <div className={styles.productPrice}>
                                $299.43
                            </div>
                        </div>
                        <div className={styles.productIcons}>
                            <div className={styles.likeOrDelete}>
                                <img
                                    className={styles.like}
                                    src="images/Products/cart/like.svg"
                                />
                                <img
                                    className={styles.delete}
                                    src="images/Products/cart/delete.svg"
                                />
                            </div>
                            <div className={styles.incOrDec}>
                                <div className={styles.dec}>-</div>
                                <div className={styles.count}>1</div>
                                <div className={styles.inc}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default AddToCart;