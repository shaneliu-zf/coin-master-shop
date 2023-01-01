import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Main from './main';
import Login from './login';
import Register from './register';
import About from './about';
import Product from './product';
import Coin from './coin';

import { Routes, Route, Outlet, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/">
              <Route index element={<Main />}/>
              <Route path="about" element={<About />} />
              <Route path="product" element={<Product />} />
              <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
      </BrowserRouter>

    {/* <Login /> */}
    {/* <Register /> */}
    {/* <About /> */}
    {/* <Product /> */}
      {/*<Coin />*/}
  </React.StrictMode>
);
function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
