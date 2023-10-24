import DocCard from "./SubComp/DocCard";
import styles from "./TopDoctors.module.css";
import docsData from "./DocsData";
import OptometristData from "./OptometristData";

const TopDoctors = () => {
  const docs = docsData.map((doc) => {
    return (
      <DocCard
        key={doc.id}
        id={doc.id}
        img={doc.img}
        name={doc.name}
        specialization={doc.specialization}
        addr={doc.addr}
      />
    );
  })
  const optometrists = OptometristData.map((optometrist) => {
    return (<DocCard
      key={optometrist.id}
      id={optometrist.id}
      img={optometrist.img}
      name={optometrist.name}
      specialization={optometrist.specialization}
      addr={optometrist.addr}
    />)
  })
  return (
    <div className={styles.container}>
      <div className={styles.searchandcategoriesContainer}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchDocInput}
            name='search doctor'
            placeholder='Search Doctor'
          />
          <img
            className={styles.searchIcon}
            src="/images/SearchDoctor/searchIcon.svg"
          />
        </div>
        <div className={styles.categoriesContainer}>
          <b className={styles.categoriesHeading}>Categories</b>
          <div className={styles.categories}>
            <img
              className={styles.categoryIcons}
              src="/images/SearchDoctor/tooth.svg"
            />
            <img
              className={styles.categoryIcons}
              style={{ backgroundColor: '#ffb167' }}
              src="/images/SearchDoctor/heartBeat.svg"
            />
            <img
              className={styles.categoryIcons}
              style={{ backgroundColor: 'blue' }}
              src="/images/SearchDoctor/tooth.svg"
            />
          </div>
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

export default TopDoctors;
