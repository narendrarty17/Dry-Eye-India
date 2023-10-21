import styles from './DocProfileCard.module.css';

const DocProfileCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.drPic} alt="" src="/pro-pic@2x.png" />
                <div className={styles.drDetail}>
                    <div>
                        <div className={styles.drName}>Dr. Stella Kane</div>
                        <div className={styles.drSpecialityAndHospital}>
                            Heart Surgeon - Flower Hospitals
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
                    Dr. Stella is the top most heart surgeon in Flower
                    Hospital. She has done over 100 successful sugeries
                    within past 3 years. She has achieved several
                    awards for her wonderful contribution in her own
                    field. She’s available for private consultation for
                    given schedules.
                </div>
            </div>
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
        </div >
    );
}
export default DocProfileCard;