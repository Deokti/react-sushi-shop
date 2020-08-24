import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { SushiShopServiceProvider } from './components/sushi-shop-service-contex';
import store from "./store";
import SushiShopService from "./service/sushiShopService";

const sushiShopService = new SushiShopService();

ReactDOM.render(
  <Provider store={store}>
    <SushiShopServiceProvider value={sushiShopService}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
    </SushiShopServiceProvider>
  </Provider>,
  document.getElementById('root')
);