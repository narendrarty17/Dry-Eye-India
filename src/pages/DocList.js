import styles from './DocList.module.css';

import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import TopDoctors from '../components/DoctorsListDetails/TopDoctors';

const DocList = () => {
    return (
        <div>
            <Header />
            <TopDoctors />
            <Footer />
        </div>
    );
}
export default DocList;