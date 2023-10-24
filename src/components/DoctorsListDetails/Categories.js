import styles from './Categories.module.css';

const Categories = () => {
    return (
        <div className={styles.container}>
            <div>
                <b>Categories</b>
                <div className={styles.categories}>
                    <img
                        className={styles.categoryIcons}
                        src="/images/SearchDoctor/tooth.svg"
                    />
                    <img
                        className={styles.categoryIcons}
                        src="/images/SearchDoctor/heartBeat.svg"
                    />
                </div>
            </div>
        </div>
    );
}
export default Categories;