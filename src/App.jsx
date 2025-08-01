import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import RecipeSearch from "./pages/RecipeSearch";
import RecipeContent from "./pages/RecipeContent";
import BarSearch from "./pages/BarSearch";
import BarContent from "./pages/BarContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/sip-search-project">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeSearch />} />
          <Route path="/recipeContent/:id" element={<RecipeContent />} />
          <Route path="/bars" element={<BarSearch />} />
          <Route path="/barContent/:id" element={<BarContent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
