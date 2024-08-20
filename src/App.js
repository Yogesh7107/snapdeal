
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Payment from './Components/Payment.jsx'
import AllRoutes from './Components/AllRoutes';


// import Address from './Components/Address';


function App() {
  return (
    <div style={{backgroundColor:"#f7f7f7"}}>
  
  <Navbar />

    <AllRoutes/>
    <br />
    <br />
    </div>
  );
}

export default App;
