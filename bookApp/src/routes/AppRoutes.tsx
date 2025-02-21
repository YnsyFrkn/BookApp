import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Details from "../pages/Details";

function AppRoutes({ searchPerformed }: { searchPerformed: boolean }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage searchPerformed={searchPerformed} />}
      />

      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default AppRoutes;
