import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipeSearch from "./pages/RecipeSearch";
import RecipeContent from "./pages/RecipeContent";
import BarSearch from "./pages/BarSearch";
import BarContent from "./pages/BarContent";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename="/sip-search-project">
      {/* <nav>
        <Link to="/">首頁</Link> | <Link to="/recipes">酒譜搜尋</Link> |{" "}
        <Link to="/bars">酒吧搜尋</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeSearch />} />
        <Route path="/recipeContent/:id" element={<RecipeContent />} />
        <Route path="/bars" element={<BarSearch />} />
        <Route path="/barContent/:id" element={<BarContent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
