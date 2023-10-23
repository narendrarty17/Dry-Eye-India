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
      <div className={styles.categories}>
        <b>Top Doctors</b>
      </div>
      {docs}
    </div>
  );
};

export default TopDoctors;
