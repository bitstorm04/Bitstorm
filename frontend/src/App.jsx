import Landingpage from "./landingpage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";


const App = () => {
  

  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>

        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
