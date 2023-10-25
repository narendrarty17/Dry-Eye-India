import { useParams } from 'react-router-dom';
import styles from './SpecialistProfileCard.module.css';
import docsData from './Data/DocsData';
import optosData from './Data/OptometristData';

const SpecialistProfileCard = () => {
    const { id, profession } = useParams();

    const date = new Date();
    const month = date.toLocaleString(undefined, { month: 'short' });
    const dateNo = date.getDate();

    // Finding the specialist based on id passed
    const searchArray = profession == 'doc' ? docsData : optosData;
    const selected = searchArray.find((doc) => {
        return parseInt(doc.id) == parseInt(id)
    })
    const appointmentDetails = selected.otherDetails.map((detail) => {
        return (
            <div
                key={detail.detailName}
                className={styles.scheduleDetails}
            >
                <div className={styles.scheduleDate} >
                    <div className={styles.month}>{month}</div>
                    <div className={styles.date}>{dateNo}</div>
                </div>
                <div className={styles.scheduleNameDayTime}>
                    <b className={styles.scheduleName}>{detail.detailName}</b>
                    <div className={styles.scheduleDayTime}>{detail.detailContent}</div>
                </div>
                <div className={styles.placeHolder} />
            </div>
        );
    })
    return (
        <div className={styles.container}>
            <div className={styles.part1}>
                <div className={styles.header}>
                    <img className={styles.drPic} alt="" src={selected.img} />
                    <div className={styles.drDetail}>
                        <div>
                            <div className={styles.drName}>
                                {selected.name}
                            </div>
                            <div className={styles.drSpecialityAndHospital}>
                                {selected.specialization}
                                <br />
                                {selected.addr}
                            </div>
                        </div>
                        <div className={styles.drContactMediaIcons}>
                            <img className={styles.contactIcon} alt="" src="/images/SearchDoctor/callIcon.svg" />
                            <img className={styles.contactIcon} alt="" src="/images/SearchDoctor/messageIcon.svg" />
                            <img className={styles.contactIcon} alt="" src="/images/SearchDoctor/videoCallIcon.svg" />
                        </div>
                    </div>
                    <div className={styles.placeHolder} />
                </div>
                <div className={styles.about}>
                    <b className={styles.aboutHeading}>About Doctor</b>
                    <div className={styles.aboutContent}>
                        {selected.about}
                    </div>
                </div>
            </div>
            <div className={styles.appointmentDetails}>
                <b className={styles.appointmentDetailsHeading}>Appointment Details</b>
                <div className={styles.appointment}>
                    {appointmentDetails}
                </div>
            </div>
        </div >
    );
}
export default SpecialistProfileCard;