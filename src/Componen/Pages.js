import React from "react";
import TJ from "./pages/TJ";
import ListTj from "./pages/List-Tj";
import Dashboard from "./pages/admin/dashboard";
import { BrowserRouter as Router,Routes,  Route} from "react-router-dom";
import Home from "./pages/Home";
import Yn from "./pages/Yn";
import Input from "./pages/admin/input";
import Edit from "./pages/admin/edit";
import Result from "./pages/admin/Result";
import Detail from "./pages/admin/DetailReport";
import Thanks from "./pages/Thanks";

const Pages = () => {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<ListTj />} />
          <Route path="/tj/:id" element={<TJ />} />
          <Route path="/yn/:id" element={<Yn />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>

        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/input" element={<Input />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Pages;
