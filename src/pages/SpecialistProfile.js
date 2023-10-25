import styles from "./SpecialistProfile.module.css";
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import SpecialistProfileCard from "../components/DoctorsListDetails/SpecialistProfileCard";

const SpecialistProfile = () => {
  return (
    <div>
      <Header />
      <SpecialistProfileCard />
      <Footer />
    </div>
  );
};

export default SpecialistProfile;
