import { useParams } from 'react-router-dom';
import styles from './DocProfileCard.module.css';
import docsData from './DocsData';

const DocProfileCard = () => {
    const { docId } = useParams();
    const date = new Date();
    const month = date.toLocaleString(undefined, { month: 'short' });
    const dateNo = date.getDate();

    // Find the doctor data based on the docId
    const selectedDoc = docsData.find((doc) => {
        return parseInt(doc.docId) == parseInt(docId)
    })
    const appointmentDetails = selectedDoc.otherDetails.map((detail) => {
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
                    <img className={styles.drPic} alt="" src="/images/SearchDoctor/docImgProfilePg.png" />
                    <div className={styles.drDetail}>
                        <div>
                            <div className={styles.drName}>{selectedDoc.docName}</div>
                            <div className={styles.drSpecialityAndHospital}>
                                {selectedDoc.specialization}
                                <br />
                                {selectedDoc.clinicAddr}
                            </div>
                        </div>
                        <div className={styles.drContactMediaIcons}>
                            <img className={styles.contactIcon} alt="" src="/group-14.svg" />
                            <img className={styles.contactIcon} alt="" src="/group-13.svg" />
                            <img className={styles.contactIcon} alt="" src="/group-12.svg" />
                        </div>
                    </div>
                    <div className={styles.placeHolder} />
                </div>
                <div className={styles.about}>
                    <b className={styles.aboutHeading}>About Doctor</b>
                    <div className={styles.aboutContent}>
                        {selectedDoc.about}
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
export default DocProfileCard;