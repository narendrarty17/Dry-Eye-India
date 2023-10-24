import styles from './DocList.module.css';

import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import TopDoctors from '../components/DoctorsListDetails/TopDoctors';
import SearchDoc from '../components/DoctorsListDetails/SearchDoc';
import Categories from '../components/DoctorsListDetails/Categories';

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