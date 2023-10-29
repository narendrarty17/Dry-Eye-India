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
                        className={styles.loveIcon}
                        src="/images/Products/topbar/love.svg"
                    />
                    <img
                        className={styles.notificationIcon}
                        src="/images/Products/topbar/notification.svg"
                    />
                </div>
            </div>
        </div>
    );
}
export default Products;