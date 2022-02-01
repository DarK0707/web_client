import React, { useEffect } from "react";
// useDispatch - to call an action, useSelector - select part of state
import { useDispatch, useSelector } from "react-redux";
import { Col, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  // dispatch
  const dispatch = useDispatch();

  // get piece of state - productList
  const productList = useSelector((state) => state.productList);
  // parts of reducer
  const { loading, error, products, page, pages } = productList;

  // call listProducts action
  useEffect(() => {
    // FIRE OFF the action
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Geri dön
        </Link>
      )}
      <h1> En son ürünler </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
