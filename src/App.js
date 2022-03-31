import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Watchlist from "./Pages/Watchlist";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    //Always wrap GlobalProvider in app.js and not in components
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
