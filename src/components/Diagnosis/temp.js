import { useEffect, useState } from 'react';
import styles from './Question.module.css';
import { useNavigate } from 'react-router-dom';

const Question = ({ sNo, question, options, nextBtnHandler, previousBtnHandler }) => {
    const navigate = useNavigate();

    // Maintain an array of radio button values, initially filled with 0s
    const [radioValues, setRadioValues] = useState(new Array(options.length).fill(0));

    useEffect(() => {
        console.log(radioValues);
    }, [radioValues]);

    const handleRadioClick = (index) => {
        const updatedRadioValues = [...radioValues];
        updatedRadioValues[index] = 1 - updatedRadioValues[index]; // Toggle the value (1 for checked, 0 for unchecked)
        setRadioValues(updatedRadioValues);
    };

    const alternatives = options.map((option, index) => (
        <div key={index} className={styles.option}>
            <input
                className={styles.checkbox}
                type="radio"
                checked={radioValues[index] === 1}
                onClick={() => handleRadioClick(index)}
            />
            <label>{option.optionTxt}</label>
        </div>
    ));

    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <div className={styles.questionLabel}>Question {sNo}/9</div>
                <div className={styles.questionMain}>
                    <div className={styles.questionTxt}>{question}</div>
                    <div className={styles.checkboxesContainer}>{alternatives}</div>
                </div>
                <div className={styles.btns}>
                    <button className={styles.previous} onClick={previousBtnHandler}>
                        Previous
                    </button>
                    <button className={styles.next} onClick={() => nextBtnHandler(radioValues)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Question;
