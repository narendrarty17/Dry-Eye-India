import { useEffect, useState } from 'react';
import styles from './Question.module.css';
import { useNavigate } from 'react-router-dom';
import { OSDIQuestions } from './QuestionnaireData';

const Question = ({ sNo, question, options, nextBtnHandler, previousBtnHandler }) => {
    const navigate = useNavigate();
    const [radioValue, setRadioValue] = useState(null);
    const btnInactiveColor = '#8bb9f7';
    const btnActiveColor = '#0f66cc';
    const [nextBtnColor, setNextBtnColor] = useState(btnInactiveColor);
    useEffect(() => {
        if (radioValue === null) {
            console.log('No btn radio checked');
            setNextBtnColor(btnInactiveColor);
        } else {
            console.log('Opted radioValue: ', radioValue);
            setNextBtnColor(btnActiveColor);
        }
    }, [radioValue])
    let i = -1;
    const alternatives = options.map((option) => {
        i++;
        return (
            <div
                key={i}
                className={styles.option}
            >
                <input
                    className={styles.checkbox}
                    type="radio"
                    checked={option.value == radioValue}
                    onChange={() => {
                        setRadioValue(option.value)
                    }}
                />
                <label>{option.optionTxt}</label>
            </div>
        );
    })
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <div className={styles.questionLabel}>Question {sNo}/{OSDIQuestions.length}</div>
                <div className={styles.questionMain}>
                    <div className={styles.questionTxt}>
                        {question}
                    </div>
                    <div className={styles.checkboxesContainer}>
                        {alternatives}
                    </div>
                </div>
                <div className={styles.btns}>
                    <button
                        className={styles.previous}
                        onClick={previousBtnHandler}
                    >
                        Previous
                    </button>
                    <button
                        className={styles.next}
                        style={{ backgroundColor: `${nextBtnColor}` }}
                        disabled={!radioValue}
                        onClick={() => {
                            nextBtnHandler(radioValue);
                            setRadioValue(null);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Question;