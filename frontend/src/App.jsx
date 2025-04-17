import Landingpage from "./landingpage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Chatbot from "./Chatbot";
import Header from './header'
import Footer from "./footer";
import Result from "./result";
const App = () => {
  

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Chatbot/>
        <Footer/>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
