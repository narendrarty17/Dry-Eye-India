import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import { useState } from "react";
import SpecialistCard from "../components/DoctorsListDetails/SubComp/SpecialistCard";
import SpecialistProfile from '../components/DoctorsListDetails/SpecialistProfile';
import docsData from "../components/DoctorsListDetails/Data/DocsData";
import OptometristData from "../components/DoctorsListDetails/Data/OptometristData";
import DocListPg from "../components/DoctorsListDetails/DocListPg";

const SearchDoc = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [profileId, setProfileId] = useState(null);
    const [profileProfession, setProfileProfession] = useState(null);
    const specialistCardClick = (id, profession) => {
        setShowProfile(true);
        setProfileId(id);
        setProfileProfession(profession);
    }
    const docs = docsData.map((doc) => {
        return (
            <SpecialistCard
                key={doc.id}
                id={doc.id}
                img={doc.img}
                name={doc.name}
                profession={doc.profession}
                specialization={doc.specialization}
                addr={doc.addr}
                backgroundColor={doc.backgroundColor}
                specialistCardClick={specialistCardClick}
            />
        );
    })
    const optometrists = OptometristData.map((optometrist) => {
        return (<SpecialistCard
            key={optometrist.id}
            profession='opto'
            id={optometrist.id}
            img={optometrist.img}
            name={optometrist.name}
            specialization={optometrist.specialization}
            addr={optometrist.addr}
            backgroundColor={optometrist.backgroundColor}
            specialistCardClick={specialistCardClick}
        />)
    })
    return (
        <div>
            <Header />
            {showProfile ?
                <SpecialistProfile id={profileId} profession={profileProfession} />
                :
                <DocListPg docs={docs} optometrists={optometrists} />
            }
            <Footer />
        </div>
    );
}
export default SearchDoc;