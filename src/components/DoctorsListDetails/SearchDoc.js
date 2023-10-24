import styles from './SearchDoc.module.css';

const SearchDoc = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchDocInput}
                />
                <img
                    className={styles.searchIcon}
                    src="/images/SearchDoctor/searchIcon.svg"
                />
            </div>
        </div>
    );
}
export default SearchDoc;