import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Main from './pages/Main';

const App = () => (
  <Fragment>
    <Main />
    <ToastContainer />
  </Fragment>
);

export default App;
