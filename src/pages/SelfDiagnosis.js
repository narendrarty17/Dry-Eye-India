import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Header from "../components/CommonComp/Header";
import Footer from "../components/CommonComp/Footer";
import DiagnosisWel from "../components/Diagnosis/DiagnosisWel";
import Questions from "../components/Diagnosis/Questions";

const Diagnosis = () => {
  const navigate = useNavigate();
  const [curPage, setCurPage] = useState('diagnosisWelcome');
  const startClickHandler = () => {
    setCurPage('questions');
  }

  return (
    <div>
      <Header />
      {
        curPage == 'diagnosisWelcome' ?
          <DiagnosisWel startClickHandler={startClickHandler} /> :
          <Questions />
      }
      <Footer />
    </div>
  );
};

export default Diagnosis;
