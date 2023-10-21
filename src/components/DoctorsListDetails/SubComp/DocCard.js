import styles from './DocCard.module.css';

const DocCard = () => {
  return (
    <div className={styles.docCard}>
      <img className={styles.docImg} alt="" src="/images/SearchDoctor/docimg.png" />
      <div>
        <b className={styles.docName}>Dr. Stefani Albert</b>
        <div className={styles.designationAndClinicAddr}>
          Heart Surgeon - Flower Hospitals
        </div>
      </div>
    </div>
  );
}
export default DocCard;