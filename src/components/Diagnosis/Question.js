import styles from './Question.module.css';
import { useNavigate } from 'react-router-dom';

const Question = ({ sNo, question, options, nextBtnHandler, previousBtnHandler }) => {
    const navigate = useNavigate();
    let i = -1;
    const alternatives = options.map((option) => {
        i++;
        return (
            <div key={i} className={styles.option}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="option1"
                />
                <label>{option}</label>
            </div>
        );
    })
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <div className={styles.questionLabel}>Question {sNo}/9</div>
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
                        onClick={nextBtnHandler}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Question;