import LearnMoreBtn from './SubComp/LearnMoreBtn';
import ServiceCard from './SubComp/ServiceCard';
import styles from './OurServices.module.css';
import { useNavigate } from 'react-router-dom';

const cardsData = [
    {
        'cardName': 'Search Doctor',
        'cardContent': 'Choose the dry eye specialist near to your place',
        'cardImg': '/images/LandingPage/servicesIcons/SearchDoc.svg',
        'cardURL': '/doclist'
    },
    {
        'cardName': 'Self Diagnosis',
        'cardContent': 'Answer few questions to know if you are suffering from dry eye disease.',
        'cardImg': '/images/LandingPage/servicesIcons/SelfDiagnosis.svg',
        'cardURL': '/doclist'
    },
    {
        'cardName': 'Our Products',
        'cardContent': 'Our products are uniquely designed for Indian Dry Eye Patients',
        'cardImg': '/images/LandingPage/servicesIcons/EmergencyCare.svg',
        'cardURL': '/doclist'
    }
]

const OurServices = () => {
    const navigate = useNavigate();
    const cards = cardsData.map(cardData => {
        return (<ServiceCard
            key={cardData.cardName}
            cardName={cardData.cardName}
            cardContent={cardData.cardContent}
            cardImg={cardData.cardImg}
            cardURL={cardData.cardURL}
        />);
    })
    return (
        <section className={styles.ourservices}>
            <header className={styles.servicesheader}>
                <h3 className={styles.headerTxt}>Our services</h3>
                <img
                    alt=""
                    src="/images/LandingPage/underline.svg"
                />
                <p className={styles.servicesTxt}>
                    We help our patients to find the right doctor, provide all essential
                    products to combat their dry eye problem and apart from that we provide
                    free counselling so that patient can understand their disease and gets in
                    the right track in dry eye recovery.
                </p>
            </header>
            <section className={styles.cardsSection}>
                <div className={styles.cardsRow}>
                    {cards}
                </div>
            </section>
            <div className={styles.buttonContainer}>
                <LearnMoreBtn />
            </div>
        </section>
    );
};
export default OurServices;