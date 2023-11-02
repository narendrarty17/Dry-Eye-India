import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import LandingPgCopy from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";
import SelfDiagnosis from './pages/SelfDiagnosis';
import SearchDoc from "./pages/SearchDoc";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Product from "./components/Products/Product";
import AddToCart from "./pages/AddToCart";

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
      <Route path="/blogpost" element={<BlogPost />} />
      <Route path="/diagnosis" element={<SelfDiagnosis />} />
      <Route path="/searchdoc" element={<SearchDoc />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/addtocart" element={<AddToCart />} />
    </Routes>
  );
}
export default App;
