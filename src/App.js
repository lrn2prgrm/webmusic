import React from 'react';
import Header from './components/NavBar';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <Footer />
    </div>
  </Provider>
);

export default App;
