import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/Details" component={Details} />
            <Route path="/Cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </React.Fragment>
    );
  }
}


export default App;
