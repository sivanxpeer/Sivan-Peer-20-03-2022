import './App.css';
import ReactGA from 'react-ga';
import Favorites from './components/favorites/Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import MainPageContainer from './redux/containers/MainPageContainer';
import { useSelector } from 'react-redux';

function App() {
  const forecast = useSelector((state)=>state.mainPage.forecast)
  // const current = useSelector((state)=>state.mainPage.currentCondition)
  console.log(forecast)
  // console.log(current)
  const TRACKING_ID = "4109337283"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact={true} component={MainPageContainer} />
        <Route path="/favorites" exact={true} component={Favorites} />
      </Router>
    </div >
  );
}

export default App;
