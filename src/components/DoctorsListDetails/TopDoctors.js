import DocCard from "./SubComp/DocCard";
import styles from "./TopDoctors.module.css";


const TopDoctors = () => {
  return (
    <div className={styles.topDoctors}>
      <div className={styles.categories}>
        <b>Top Doctors</b>
      </div>
      <DocCard />
      <DocCard />
      <DocCard />
    </div>
  );
};

export default TopDoctors;
