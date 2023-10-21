import DocProfileCard from "../components/DoctorsListDetails/DocProfileCard";
import styles from "./DocProfile.module.css";
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const DocProfile = () => {
  return (
    <div>
      <Header />
      <DocProfileCard />
      <Footer />
    </div>
  );
};

export default DocProfile;
