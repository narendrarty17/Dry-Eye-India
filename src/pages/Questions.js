import styles from './Questions.module.css';
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.question}>
                    <div className={styles.questionLabel}>Question 1/9</div>
                    <div className={styles.questionMain}>
                        <div className={styles.questionTxt}>
                            For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes?
                        </div>
                        <div className={styles.checkboxesContainer}>
                            <div className={styles.option}>
                                <input className={styles.checkbox} type="checkbox" name="option1" />
                                <label for="option1">
                                    Scope 1 - Determine environmental impact levels.
                                </label>
                            </div>
                            <div className={styles.option}>
                                <input className={styles.checkbox} type="checkbox" name="option2" />
                                <label for="option2">
                                    Scope 2 - Reduce carbon footprints.
                                </label>
                            </div>
                            <div className={styles.option}>
                                <input className={styles.checkbox} type="checkbox" name="option3" />
                                <label for="option3">
                                    Scope 3 - Enhance environmental impacts on a larger scale.
                                </label>
                            </div>
                            <div className={styles.option}>
                                <input className={styles.checkbox} type="checkbox" name="option4" />
                                <label for="option4">
                                    I do not know the answer to the question
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <button
                            className={styles.previous}
                        >
                            Previous
                        </button>
                        <button
                            className={styles.next}
                            onClick={() => navigate('/results')}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Questions;