import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from 'react-redux';
import{ store, persistor}from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AuthProvider} from "./component/AuthProvider";
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
          <AuthProvider>
            <Routes>
             <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
          </BrowserRouter>
        </PersistGate>
        
    </Provider>,
    document.getElementById('root')
);