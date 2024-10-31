import "./index.css";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Account from "./pages/account";
import Search from "./pages/search";
import Create from "./pages/create";
import SidenavComponent from "./components/sidenav";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <SidenavComponent />
        <div className="container-fluid" id = "main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/account" element={<Account />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
