import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/shared/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Alert />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero />
                  <Contact />
                </>
              }
            />
            <Route path='/' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
