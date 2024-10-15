import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-4ll1bcywehv387ca.us.auth0.com"
    clientId="PrwTe9niY8eXxva3V2vAsN04iI2alJkv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>

)
