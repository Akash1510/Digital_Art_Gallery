
import Landing from './Components/Landing_UI/landing'
import Login from './Components/Auth_Page/login';
import Signup from './Components/Auth_Page/signup';
import CreatePost from './Components/POST/Uplooad/Create_Post';
import Forgotpassword from './Components/Auth_Page/forgot_password';
import Home from './Components/POST/Profile/Home'
import Images from './Components/POST/Profile/images';
import Resetpassword from './Components/Auth_Page/reset_password';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (

    <>
      <Router>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/upload' element={<CreatePost />} />
          <Route path='/forgot_password' element={<Forgotpassword />} />
          <Route path='/reset_password' element={<Resetpassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/image' element={<Images />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
