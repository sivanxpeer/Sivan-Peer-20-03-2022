import './App.css';
// import MainPage from './components/mainPage/MainPage';
import Favorites from './components/favorites/Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import MainPageContainer from './redux/containers/MainPageContainer';
// import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from './redux/actions/'

function App() {
  // const  state = useSelector((state) => state.mainPage);
  // console.log(state)  
  // const dispatch = useDispatch();
  // const AC = bindActionCreators(actionCreators, dispatch);

  // console.log(AC);

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
