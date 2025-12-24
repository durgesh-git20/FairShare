import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import GroupDetails from "./pages/GroupDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:id" element={<GroupDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
