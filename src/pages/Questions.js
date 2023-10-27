import { useNavigate } from 'react-router-dom';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import Question from '../components/Diagnosis/Question';
import { OSDIQuestions, OSDIOptions } from "../components/Diagnosis/QuestionnaireData";
import { useEffect, useState } from 'react';

const Questions = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [osdiVal, setOsdiVal] = useState(null);
    const [prevRadioVal, setPrevRadioVal] = useState(null);
    useEffect(() => {
        console.log('temp result: ', osdiVal);
        console.log('count:', count);
        if (count >= OSDIQuestions.length) {
            navigate(`/results/${osdiVal}`);
        }
    }, [osdiVal]);
    const nextBtnHandler = (radioValue) => {
        setPrevRadioVal(radioValue);
        setOsdiVal((prevOsdiVal) => prevOsdiVal + radioValue);
        setCount((prevCount) => prevCount + 1);
    }
    const previousBtnHandler = () => {
        if (count == 0) {
            navigate('/diagnosis')
        } else {
            setCount((prevCount) => prevCount - 1)
            setOsdiVal((prevOsdiVal) => prevOsdiVal - prevRadioVal);
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