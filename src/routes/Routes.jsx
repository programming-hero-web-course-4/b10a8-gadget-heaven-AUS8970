import { createBrowserRouter } from 'react-router-dom'
import Layouts from '../layouts/Layouts';
import ErrorPage from '../pages/ErrorPage';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import ProductCards from '../components/ProductCards';
import ProductDetails from '../components/ProductDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCards />,
            loader: () => fetch('../products.json'),
          },
          {
            path: '/category/:category',
            element: <ProductCards />,
            loader: () => fetch('../products.json'),
          },
        ]
      },
      {
        path: '/product/:product_id',
        element: <ProductDetails />,
        loader: () => fetch('../products.json'),
      },
      {
        path: '/statistics',
        element: <Statistics> </Statistics>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
    ]
  },
])

export default routes;