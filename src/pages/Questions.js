import { useNavigate } from 'react-router-dom';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import Question from '../components/Diagnosis/Question';
import { OSDIQuestions, OSDIOptions } from "../components/Diagnosis/QuestionnaireData";
import { useState } from 'react';

const Questions = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const nextBtnHandler = () => {
        if (count >= 11) {
            navigate('/results');
        } else {
            setCount(count + 1);
        }
    }
    const previousBtnHandler = () => {
        if (count == 0) {
            navigate('/diagnosis')
        } else {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <Header />
            <Question
                sNo={count + 1}
                question={OSDIQuestions[count]}
                options={OSDIOptions}
                nextBtnHandler={nextBtnHandler}
                previousBtnHandler={previousBtnHandler}
            />
            <Footer />
        </div>
    );
}
export default Questions;