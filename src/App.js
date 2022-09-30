import './App.css';
import Favorites from './components/favorites/Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import MainPageContainer from './redux/containers/MainPageContainer';
import { useSelector } from 'react-redux';

function App() {
  const forecast = useSelector((state) => state.mainPage.forecast)
  // const current = useSelector((state)=>state.mainPage.currentCondition)
  console.log(forecast)

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
