import styles from './Results.module.css';
import Result from '../components/Diagnosis/Result';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";

const Results = () => {
    return (
        <div>
            <Header />
            <Result />
            <Footer />
        </div>
    );
}
export default Results;