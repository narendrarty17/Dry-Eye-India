import styles from './DocList.module.css';

import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import Specialists from '../components/DoctorsListDetails/Specialists';

const DocList = () => {
    return (
        <div>
            <Header />
            <Specialists />
            <Footer />
        </div>
    );
}
export default DocList;