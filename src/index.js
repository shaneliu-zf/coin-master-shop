import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';


import {
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useSearchParams,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import Layout from "./normal-page/layout";

import Main from "./normal-page/main";
import Like from "./normal-page/like";
import Grade from "./normal-page/grade";
import Coin from './normal-page/coin';
import About from './normal-page/about';
import Product from './normal-page/product';
import Category from './normal-page/category';

import Trade from "./admin-page/trade";
import Login from './admin-page/login';

import Admin_layout from "./admin-page/admin_layout";
import { Col, Container, Row } from "react-bootstrap";
import Search_page from "./normal-page/Search";
import Item_List from "./admin-page/item_list";
import Logout from "./admin-page/Logout";
import ItemUpload from "./admin-page/new_item";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Admin_layout />}>
          <Route path="trade" element={<Trade />} />
          <Route path="item_list" element={<Item_List />} />
          <Route path="new_item" element={<ItemUpload />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="grade" element={<Grade />} />
          <Route path="like" element={<Like />} />
          <Route path="coin">
            <Route path=":coin_id" element={<Coin />} />
          </Route>
          <Route path="category">
            <Route index element={<NoMatch />} />
            <Route path=":category_name" element={<Category />} />
          </Route>
          <Route path="search">
            <Route path=":search_post" element={<Search_page />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function NoMatch() {
  return (
    <div>
      <Row>
        <Col sm={12}>
          <Container>

            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <h1>404</h1>
            <h2>Nothing to see here!</h2>
            <p>
              <Link to="/">Go to the home page</Link>
            </p>
            <br /><br /><br />
            <br /><br /><br /><br /><br /><br />


          </Container>
        </Col>
      </Row>
    </div>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
