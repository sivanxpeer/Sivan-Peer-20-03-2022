import './App.css';
import ReactGA from 'react-ga';
import Favorites from './components/favorites/Favorites';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import MainPageContainer from './redux/containers/MainPageContainer';
import { useSelector } from 'react-redux';
const ContactUs = () => (
  <div>
    <h3>Contact Us</h3>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
function App() {
  const forecast = useSelector((state) => state.mainPage.forecast)
  // const current = useSelector((state)=>state.mainPage.currentCondition)
  console.log(forecast)
  // console.log(current)
  const TRACKING_ID = "G-D6R3JSHHX1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Route path="/" exact={true} component={MainPageContainer} />
        <Route path="/favorites" exact={true} component={Favorites} />
      </Router> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
