import { useParams } from 'react-router-dom';
import styles from './DocProfileCard.module.css';
import docsData from './DocsData';

const DocProfileCard = () => {
    const { docId } = useParams();

    // Find the doctor data based on the docId
    const selectedDoc = docsData.find((doc) => {
        return parseInt(doc.docId) == parseInt(docId)
    })
    return (
        <div className={styles.container}>
            <div className={styles.part1}>
                <div className={styles.header}>
                    <img className={styles.drPic} alt="" src="/pro-pic@2x.png" />
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
            <div className={styles.part2}>
                <div className={styles.upcomingSchedules}>
                    <b className={styles.upcomingSchedulesHeading}>Upcoming Schedules</b>
                    <div className={styles.schedules}>
                        <div className={styles.scheduleDetails}>
                            <div className={styles.scheduleDate} >
                                <div className={styles.month}>Jan</div>
                                <div className={styles.date}>12</div>
                            </div>
                            <div className={styles.scheduleNameDayTime}>
                                <b className={styles.scheduleName}>Consultation</b>
                                <div className={styles.scheduleDayTime}>Sunday . 9am - 11am</div>
                            </div>
                            <div className={styles.placeHolder} />
                        </div>
                        <div className={styles.scheduleDetails}>
                            <div className={styles.scheduleDate} >
                                <div className={styles.month}>Jan</div>
                                <div className={styles.date}>12</div>
                            </div>
                            <div className={styles.scheduleNameDayTime}>
                                <b className={styles.scheduleName}>Consultation</b>
                                <div className={styles.scheduleDayTime}>Sunday . 9am - 11am</div>
                            </div>
                            <div className={styles.placeHolder} />
                        </div>
                        <div className={styles.scheduleDetails}>
                            <div className={styles.scheduleDate} >
                                <div className={styles.month}>Jan</div>
                                <div className={styles.date}>12</div>
                            </div>
                            <div className={styles.scheduleNameDayTime}>
                                <b className={styles.scheduleName}>Consultation</b>
                                <div className={styles.scheduleDayTime}>Sunday . 9am - 11am</div>
                            </div>
                            <div className={styles.placeHolder} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default DocProfileCard;