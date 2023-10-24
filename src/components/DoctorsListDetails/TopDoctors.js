import DocCard from "./SubComp/DocCard";
import styles from "./TopDoctors.module.css";
import docsData from "./DocsData";

const TopDoctors = () => {
  const docs = docsData.map((doc) => {
    return (
      <DocCard
        key={doc.docId}
        docId={doc.docId}
        docName={doc.docName}
        specialization={doc.specialization}
        clinicAddr={doc.clinicAddr}
      />
    );
  })
  return (
    <div className={styles.topDoctors}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchDocInput}
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
        </div>
      </div>
      <div className={styles.categories}>
        <b>Top Doctors</b>
      </div>
      {docs}
    </div>
  );
};

export default TopDoctors;
