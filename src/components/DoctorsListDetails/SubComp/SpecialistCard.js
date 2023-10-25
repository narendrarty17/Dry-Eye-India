import { useNavigate } from 'react-router-dom';
import styles from './SpecialistCard.module.css';

const DocCard = ({ name, specialization, addr, id, img, profession }) => {
  const navigate = useNavigate();
  const navigatePath = `/specialistprofile/${id}/profession/${profession}`;
  return (
    <div
      className={styles.docCard}
      onClick={() => navigate(navigatePath)}
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