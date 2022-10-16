import Nav from './componets/Nav';
import Profile from './componets/Profile';
import Home from './view/Home';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom'
import Orders from './view/Orders';
import Contact from './view/Help';
import Ordersucssesfull from './view/Ordersucssesfull';
import Fileorder from './componets/Fileorder';
import Xerox from './componets/Xerox';



function App() {

  const location = useLocation();

  return (

    <>

      <AnimatePresence>
        <Routes location={location} key={location.key} >

          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/help" element={<Contact />} />
          <Route path="/ordersuccess" element={<Ordersucssesfull />} />
          <Route path="/orderfile" element={<Fileorder />} />
          <Route path="/xerox" element={<Xerox />} />

        </Routes>
      </AnimatePresence>


      {/* <Home /> */}
      <Nav />

    </>
  );
}

export default App;
