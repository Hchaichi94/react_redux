import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/iceCreamContainer'
import ItemContainer from './components/itemContainer'
import UserContainer from './components/UserContainer'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        ---------------------
        <NewCakeContainer />
                ------------------
        <HooksCakeContainer />

        --------------------
       <IceCreamContainer />

       ----------------
       <br></br>
       ownProps
       <br></br>
        <ItemContainer cake />
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
