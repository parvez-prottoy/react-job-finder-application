import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<AddJob />} />
        <Route path="/jobs/edit/:id" element={<EditJob />} />
      </Routes>
    </Router>
  );
};

export default App;
