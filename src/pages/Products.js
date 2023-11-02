import styles from './Products.module.css';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products, recProducts, categories } from '../components/Products/ProductsData';
import ProductHomepage from '../components/Products/ProductHomepage';
import ProductTemp from '../components/Products/Product';
import Product from '../components/Products/Product';

const Products = () => {
    const [showProduct, setShowProduct] = useState(false);
    const [productId, setProductId] = useState(null);
    const productClickHandler = (id) => {
        setProductId(id);
        setShowProduct(true);
    }

    return (
        <div>
            <Header />
            {showProduct ?
                <Product id={productId} />
                :
                <ProductHomepage
                    productClickHandler={productClickHandler}
                />
            }

            <Footer />
        </div>
    );
}
export default Products;