import { useNavigate } from "react-router-dom";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ cardName, cardContent, cardImg, cardURL }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.serviceCard}
      onClick={() => navigate(cardURL)}
    >
      <div className={styles.serviceCardContentWrapper}>
        <div className={styles.serviceLogoContainer}><img className={styles.serciceCardLogo} alt="" src={cardImg} /></div>
        <b className={styles.serviceCardTitle}>{cardName}</b>
        <div className={styles.serviceCardContent}>{cardContent}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
