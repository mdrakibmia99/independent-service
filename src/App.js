import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CheckOut from './components/CheckOut/CheckOut';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Reset from './components/Reset/Reset';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import Blog from './routes/Blog/Blog';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';


function App() {
  return (
    <section className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
              <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </section>
  );
}

export default App;
