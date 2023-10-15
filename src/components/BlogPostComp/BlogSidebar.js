import { useNavigate } from 'react-router-dom';
import styles from './BlogSidebar.module.css'

const BlogSidebar = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarbtns}>
                <button className={styles.getstartedbtn}>
                    Get started
                </button>
                <div
                    className={styles.signIn}
                    onClick={() => navigate('/consult')}
                >Sign In</div>
            </div>
            <button className={styles.searchbar}>
                <img className={styles.searchIcon} alt="" src="/images/BlogPost/search.svg" />
                <div className={styles.search}>Search</div>
            </button>
            <div className={styles.sidebarauthordesc}>
                <div className={styles.sidebarauthorlogo}>
                    <img
                        className={styles.authorimgIcon}
                        alt=""
                        src="/images/BlogPost/authorImg.png"
                    />
                    <div>
                        <div className={styles.mariaLawrence}>
                            Maria Lawrence
                        </div>
                        <div className={styles.kFollowers}>
                            257K followers
                        </div>
                    </div>
                </div>
                <div className={styles.sidebarauthorcontent}>
                    Lead UX Designer @ Slack. Loves travelling and lives
                    for backstage action! Love to design user centric
                    products and understanding consumer behaviour
                </div>
                <div className={styles.sidebarauthorbtn}>
                    <div className={styles.followbtn}>
                        <div className={styles.follow}>Follow</div>
                    </div>
                    <img className={styles.sendbtnIcon} alt="" src="/images/BlogPost/sendbtn.svg" />
                </div>
            </div>
            <div className={styles.suggestedreads}>
                <div className={styles.suggestedReadsHeading}>
                    Suggested Reads
                </div>
                <div className={styles.suggestedreadcontainer}>

                    <div className={styles.suggestedread}>
                        <img
                            className={styles.suggestedreadicon}
                            alt=""
                            src="/images/BlogPost/suggestedReadImg.png"
                        />
                        <div className={styles.suggestedreadcontent}>
                            <div className={styles.suggestedreadauthordetails}>
                                <img
                                    className={styles.suggestedreadauthoricon}
                                    alt=""
                                    src="/images/BlogPost/suggestedReadAuthor.png"
                                />
                                <div className={styles.suggestedreadauthor}>Andrew Joe</div>
                            </div>
                            <div className={styles.suggestedreadtitle}>
                                As a Google Maps PM, how can you improve it?
                            </div>
                        </div>
                    </div>

                    <div className={styles.suggestedread}>
                        <img
                            className={styles.suggestedreadicon}
                            alt=""
                            src="/images/BlogPost/suggestedReadImg.png"
                        />
                        <div className={styles.suggestedreadcontent}>
                            <div className={styles.suggestedreadauthordetails}>
                                <img
                                    className={styles.suggestedreadauthoricon}
                                    alt=""
                                    src="/images/BlogPost/suggestedReadAuthor.png"
                                />
                                <div className={styles.suggestedreadauthor}>Andrew Joe</div>
                            </div>
                            <div className={styles.suggestedreadtitle}>
                                As a Google Maps PM, how can you improve it?
                            </div>
                        </div>
                    </div>

                    <div className={styles.suggestedread}>
                        <img
                            className={styles.suggestedreadicon}
                            alt=""
                            src="/images/BlogPost/suggestedReadImg.png"
                        />
                        <div className={styles.suggestedreadcontent}>
                            <div className={styles.suggestedreadauthordetails}>
                                <img
                                    className={styles.suggestedreadauthoricon}
                                    alt=""
                                    src="/images/BlogPost/suggestedReadAuthor.png"
                                />
                                <div className={styles.suggestedreadauthor}>Andrew Joe</div>
                            </div>
                            <div className={styles.suggestedreadtitle}>
                                As a Google Maps PM, how can you improve it?
                            </div>
                        </div>
                    </div>

                    <div className={styles.suggestedread}>
                        <img
                            className={styles.suggestedreadicon}
                            alt=""
                            src="/images/BlogPost/suggestedReadImg.png"
                        />
                        <div className={styles.suggestedreadcontent}>
                            <div className={styles.suggestedreadauthordetails}>
                                <img
                                    className={styles.suggestedreadauthoricon}
                                    alt=""
                                    src="/images/BlogPost/suggestedReadAuthor.png"
                                />
                                <div className={styles.suggestedreadauthor}>Andrew Joe</div>
                            </div>
                            <div className={styles.suggestedreadtitle}>
                                As a Google Maps PM, how can you improve it?
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default BlogSidebar;