import styles from "./ProductPage.module.css";

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.productImages}>
        <img className={styles.productImg} alt="" src="/product-11@2x.png" />
        {/* 
        <img className={styles.productImg} alt="" src="/product-21@2x.png" />
        <img className={styles.productImg} alt="" src="/product-31@2x.png" />
        <img className={styles.productImg} alt="" src="/product-41@2x.png" /> 
        */}
      </div>
      {/* <img className={styles.backbtnIcon} alt="" src="/arrowleft-1.svg" /> */}
      <div className={styles.productTitleBar}>
        <div className={styles.productNameAndLikebtn}>
          <div className={styles.productFullName}>Nike Air MAX 2022</div>
          <img className={styles.likebtnIcon} alt="" src="/favorite-1.svg" />
        </div>
        <div className={styles.titleBarIcons}>
          <div className={styles.itemsSold}>
            423 SOLD
          </div>
          <div className={styles.ratingAndReviewCount}>
            <img className={styles.ratingIcon} alt="" src="/starfilled-1.svg" />
            <div className={styles.reviews}>4.3 (53 reviews )</div>
          </div>
        </div>
      </div>
      <div className={styles.seprator1} />
      <div className={styles.productDetailes}>
        <div className={styles.description}>
          <div className={styles.descriptionTitle}>Description</div>
          <div className={styles.descriptionTxt}>
            Lorem ipsum dolor sit amet consectetur. Malesuada faucibus viverra
            eget ridiculus a nec amet in. In turpis etiam tristique sit enim
            proin pulvinar.
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <div className={styles.sizeTitle}>Size</div>
            <div className={styles.sizeContainer}>
              <div className={styles.unselectedSizeContainer}>
                <div className={styles.unselectedSize} />
                <div className={styles.sizeNoTxt}>32</div>
              </div>
              <div className={styles.selectedSizeContainer}>
                <div className={styles.selectedSize} />
                <div className={styles.sizeNoTxt}>40</div>
              </div>
              <div className={styles.unselectedSizeContainer}>
                <div className={styles.unselectedSize} />
                <div className={styles.sizeNoTxt}>44</div>
              </div>
              <div className={styles.unselectedSizeContainer}>
                <div className={styles.unselectedSize} />
                <div className={styles.sizeNoTxt}>50</div>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.colorTitle}>Color</div>
            <div className={styles.colorBarContainer}>
              <div className={styles.color1} />
              <img className={styles.color2} alt="" src="/group-4.svg" />
              <div className={styles.color3} />
            </div>
          </div>
        </div>

        <div className={styles.quantity}>
          <div className={styles.quantityTitle}>Quantity</div>
          <div className={styles.quantityContainer}>
            <div className={styles.quantityInputContainer}>
              <div className={styles.input}>1</div>
              <div className={styles.placeholder} />
              <div className={styles.incDecIcons}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
                <img className={styles.addIcon} alt="" src="/add.svg" />
              </div>
            </div>
            <div className={styles.QuantityBorderBottom} />
          </div>
        </div>
      </div>

      <div className={styles.seprator1} />

      <div className={styles.priceButton}>
        <div className={styles.totalPrice}>
          <div className={styles.totalPriceTxt}>TOTAL PRICE</div>
          <div className={styles.totalPriceNumber}>$690.00</div>
        </div>
        <div className={styles.addToCartBtn}>
          <div className={styles.addToCartText}>ADD TO CARD</div>
          <img alt="" src="/icon2.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
