import './App.css';
import Favorites from './components/favorites/Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import MainPageContainer from './redux/containers/MainPageContainer';

function App() {
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
