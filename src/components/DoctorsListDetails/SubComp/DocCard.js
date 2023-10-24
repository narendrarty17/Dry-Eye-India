import { useNavigate } from 'react-router-dom';
import styles from './DocCard.module.css';

const DocCard = ({ name, specialization, addr, id, img }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.docCard}
      onClick={() => navigate(`/docprofile/${id}`)}
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
export default DocCard;