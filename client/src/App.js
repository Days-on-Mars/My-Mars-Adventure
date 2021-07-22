import './App.css';
import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import MarsPage from './components/MarsPage';


class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
        {/*<Route exact path ={'/beers'} render={() => {
              return <beers beerData={this.state.beers}/>
            }} /> */}
         <Route exact path ={'/Mars-Journal'} component={MarsPage} /> 
        </Switch>
        </BrowserRouter>
      </>
    );
  }
  }
  export default App;