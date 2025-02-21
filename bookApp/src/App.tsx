import "./css/components.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";

function App() {
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false); // Arama durumu

  const handleSearch = () => {
    setSearchPerformed(true);
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} />
        <AppRoutes searchPerformed={searchPerformed} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
