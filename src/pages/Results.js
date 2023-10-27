import styles from './Results.module.css';
import Result from '../components/Diagnosis/Result';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import { useParams } from 'react-router-dom';

const Results = () => {
    const { osdiValue } = useParams();
    return (
        <div>
            <Header />
            <Result osdiValue={osdiValue} />
            <Footer />
        </div>
    );
}
export default Results;