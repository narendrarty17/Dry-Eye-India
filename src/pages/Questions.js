import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import QuestionCard from '../components/Diagnosis/QuestionCard';

import styles from './Questions.module.css';

const Questions = () => {
    return (
        <div>
            <Header />
            <QuestionCard />
            <Footer />
        </div>
    );
}
export default Questions;