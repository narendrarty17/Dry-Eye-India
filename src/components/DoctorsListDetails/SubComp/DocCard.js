import { useNavigate } from 'react-router-dom';
import styles from './DocCard.module.css';

const DocCard = ({ docName, specialization, clinicAddr, docId }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.docCard}
      onClick={() => navigate(`/docprofile/${docId}`)}
    >
      <img className={styles.docImg} alt="" src="/images/SearchDoctor/docimg.png" />
      <div className={styles.docDetails}>
        <b className={styles.docName}>{docName}</b>
        <div className={styles.designation}>
          {specialization}
        </div>
        <div className={styles.clinicAddr}>{clinicAddr}</div>
      </div>
    </div>
  );
}
export default DocCard;