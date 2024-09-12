import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/news',
        element: <NewsPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
