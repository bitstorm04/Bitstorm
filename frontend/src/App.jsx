import Landingpage from "./landingpage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Chatbot from "./Chatbot";


const App = () => {
  

  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
        <Chatbot/>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
