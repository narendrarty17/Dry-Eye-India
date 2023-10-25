import SpecialistCard from "./SubComp/SpecialistCard";
import styles from "./Specialists.module.css";
import docsData from "./Data/DocsData";
import OptometristData from "./Data/OptometristData";

const Specialists = () => {
  const docs = docsData.map((doc) => {
    return (
      <SpecialistCard
        key={doc.id}
        id={doc.id}
        img={doc.img}
        name={doc.name}
        profession={doc.profession}
        specialization={doc.specialization}
        addr={doc.addr}
        backgroundColor={doc.backgroundColor}
      />
    );
  })
  const optometrists = OptometristData.map((optometrist) => {
    return (<SpecialistCard
      key={optometrist.id}
      profession='opto'
      id={optometrist.id}
      img={optometrist.img}
      name={optometrist.name}
      specialization={optometrist.specialization}
      addr={optometrist.addr}
      backgroundColor={optometrist.backgroundColor}
    />)
  })
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchDocInput}
          name='search doctor'
          placeholder='Search Specialist'
        />
        <img
          className={styles.searchIcon}
          src="/images/SearchDoctor/searchIcon.svg"
        />
      </div>
      <div className={styles.categoriesContainer}>
        <b className={styles.categoriesHeading}>Categories</b>
        <div className={styles.categories}>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryIcons}
              src="/images/SearchDoctor/CategoriesImgs/MGD.webp"
            />
            <div>MG Dysfunction</div>
          </div>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryIcons}
              src="/images/SearchDoctor/CategoriesImgs/Aqueous_Deficiency.webp"
            />
            <div>Aqueous Deficiency</div>
          </div>
          <div className={styles.categoryCardLast}>
            <img
              className={styles.categoryIcons}
              src="/images/SearchDoctor/CategoriesImgs/mixed.jpeg"
            />
            <div>Mixed</div>
          </div>
          <div className={styles.dummyDiv} />
        </div>
      </div>
      <div className={styles.cardLists}>
        <div className={styles.cardList}>
          <b>Top Doctors</b>
          {docs}
        </div>
        <div className={styles.cardList}>
          <b>Top Optometrist</b>
          {optometrists}
        </div>
      </div>
    </div>
  );
};

export default Specialists;
