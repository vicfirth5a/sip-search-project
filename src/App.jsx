import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipeSearch from "./pages/RecipeSearch";
import BarSearch from "./pages/BarSearch";

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
        <Route path="/bars" element={<BarSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
