
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route, } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Order from './components/Order/Order';
import DetailsCourse from './components/DetailsCourse/DetailsCourse';
import Allcourse from './components/Allcourse/Allcourse';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import RestPass from './components/Login/RestPass/RestPass';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RestPass" element={<RestPass />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/AllCourse" element={<Allcourse />} />
        <Route path="/AllCourse/:courseId" element={<DetailsCourse />} />
        <Route path="/Order" element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
