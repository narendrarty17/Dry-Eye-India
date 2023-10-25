import { useNavigate } from 'react-router-dom';
import styles from './SpecialistCard.module.css';

const SpecialistCard = ({ name, specialization, addr, id, img, profession, backgroundColor }) => {
  const navigate = useNavigate();
  const navigatePath = `/specialistprofile/${id}/profession/${profession}`;
  console.log(backgroundColor);
  return (
    <div
      className={styles.docCard}
      onClick={() => navigate(navigatePath)}
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