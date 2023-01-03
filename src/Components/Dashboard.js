import React from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Profile</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
          {/* 
          PassingURLparameters_Step2-> To catch the route dynamically, we add :orderId to the route configuration in Orders component. 
          */}
          <Route path="order_details/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export const Profile = () => {
  return <h2>Profile</h2>;
};
export const Orders = () => {
  const orderIds = ["10001", "10002", "10003"];
  return (
    <>
      <h2>Orders</h2>
      <ul className="orders">
        {/* 
https://www.codingdeft.com/posts/react-router-tutorial/#passing-url-parameters-to-a-route
PassingURLparameters_Step1-> We are looping through a list of order ids and creating a link to order_details route and we are appending it with the order id.
        */}
        {orderIds.map((orderId) => {
          return (
            <li key={orderId}>
              <Link to={`/dashboard/order_details/${orderId}`}>
                View Order {orderId}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export const Quotes = () => {
  return <h2>Quotes</h2>;
};

// PassingURLparametersStep3-> In the OrderDetails component, we make use of the useParams hook that can be imported from the react-router-dom to retrieve the value of orderId and display it.
export const OrderDetails = () => {
  const params = useParams();
  // https://www.codingdeft.com/posts/react-router-tutorial/#navigating-programmatically-to-a-route
  //NavProgToRoute_Step1->If you want to perform navigation on certain user action, say on click of a button, react router provides us with a hook for it called useNavigate. Now we have order details page, we can add a link back to orders page and implement it using useNavigate.
  const navigate = useNavigate();

  const onBackClick = (e) => {
    e.preventDefault();
    // NavProgToRoute_Step2->We can pass the absolute path where the user needs to be navigated or call navigate(-1) to go back a page.
    navigate("/dashboard/orders");
  };

  return (
    <>
      <h2>Details of order {params.orderId}</h2>
      <a href="#" onClick={onBackClick}>
        Back to Orders
      </a>
    </>
  );
};

export default Dashboard;
