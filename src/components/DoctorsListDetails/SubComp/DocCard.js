import { useNavigate } from 'react-router-dom';
import styles from './DocCard.module.css';

const DocCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.docCard}
      onClick={() => navigate('/docprofile')}
    >
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