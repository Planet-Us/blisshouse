import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AreasIndex from "./pages/AreasIndex.jsx";
import AreaPage from "./pages/AreaPage.jsx";
import ListingPage from "./pages/ListingPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#080722] text-[#d4af37]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas" element={<AreasIndex />} />
        <Route path="/areas/:areaSlug" element={<AreaPage />} />
        <Route path="/properties/:listingSlug" element={<ListingPage />} />
      </Routes>
    </div>
  );
}
