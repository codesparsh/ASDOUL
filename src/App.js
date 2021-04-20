import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
const store = Store();

class App extends Component {



  render() {
  
   

    return (
      <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
