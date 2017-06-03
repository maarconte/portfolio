import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { AppContainer } from 'react-hot-loader';

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'App.css';

import './theme/globalStyle';

ReactDOM.render(
  <AppContainer>
      {routes}
    </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./routes" , () => {
  const routes = require("./routes").default;
  ReactDOM.render(
    <AppContainer>
      {routes}
    </AppContainer>,
    document.getElementById('root')
  );
  });
}