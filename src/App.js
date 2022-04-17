
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route, } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Order from './components/Order/Order';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Order" element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        } />
      </Routes>

    </div>
  );
}

export default App;
