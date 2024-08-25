import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/add-job" element={<FormPage />} />
        <Route path="/jobs/edit-job" element={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
