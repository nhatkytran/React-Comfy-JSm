import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import {
  StructureProvider,
  ProductsProvider,
  FilterProvider,
  CartProvider,
  UserProvider,
} from "./context";
import { AuthWrapper } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <AuthWrapper>
        <BrowserRouter>
          <UserProvider>
            <StructureProvider>
              <ProductsProvider>
                <FilterProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
                </FilterProvider>
              </ProductsProvider>
            </StructureProvider>
          </UserProvider>
        </BrowserRouter>
      </AuthWrapper>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
