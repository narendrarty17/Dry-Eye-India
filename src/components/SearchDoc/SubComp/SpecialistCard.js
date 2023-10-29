import styles from './SpecialistCard.module.css';

const SpecialistCard = ({ name, specialization, addr, id, img, profession, backgroundColor, specialistCardClick }) => {
  return (
    <div
      className={styles.docCard}
      onClick={() => specialistCardClick(id, profession)}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <img className={styles.docImg} alt="" src={img} />
      <div className={styles.docDetails}>
        <b className={styles.docName}>{name}</b>
        <div className={styles.designation}>
          {specialization}
        </div>
        <div className={styles.clinicAddr}>{addr}</div>
      </div>
    </div>
  );
}
export default SpecialistCard;