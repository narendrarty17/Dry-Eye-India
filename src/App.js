import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPgCopy from "./pages/LandingPage";
import ConsultToday from "./pages/ConsultToday";
import { useEffect } from "react";
import BlogPost from "./pages/BlogPost";
import DiagnosisPg from './pages/DiagnosisPg';
import ProductPage from "./pages/ProductPage";
import DocList from "./pages/DocList";
import SpecialistProfile from "./pages/SpecialistProfile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/consult-today":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPgCopy />} />
      <Route path="/consult" element={<ConsultToday />} />
      <Route path="/blogpost" element={<BlogPost />} />
      <Route path="/diagnosis" element={<DiagnosisPg />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/specialistlist" element={<DocList />} />
      <Route path="/specialistprofile/:id/profession/:profession" element={<SpecialistProfile />} />
    </Routes>
  );
}
export default App;
