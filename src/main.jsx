import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Comphonents/Header/Home/Home';
import Cart from './Comphonents/Cart/Cart';
import LogIn from './LogIn/LogIn';
import CreateAccount from './Comphonents/CreateAccount/CreateAccount';
import AuthProvider from './Firebase/AuthProvider/AuthProvider';
import Shop from './OurShop/Shop';
import Category from './Category/Category';
import AddProduct from './AddProduct/AddProduct';
import ContactUs from './ContactUs/ContactUs';
import BrandProduct from './BrandProduct/BrandProduct';
import UpdateUser from './Update/UpdateUser';
import ProductsDetails from './ProductsDeails/ProductsDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/cart.json')
      },
      {
        path:"/cart",
        element:<Cart></Cart>,
        
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"/createAccount",
        element:<CreateAccount></CreateAccount>
      },
      {
        path:"/shops",
        element:<Shop></Shop>
      },
      {
        path:"/category",
        element:<Category></Category>
      },
      {
        path:"/addProduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/contact",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/brandProduct/:BrandName",
        element:<BrandProduct></BrandProduct>,
        loader: () => fetch('http://localhost:5000/product')
      },

      { 
        path:"/update/:id",
        element:<UpdateUser></UpdateUser>,
        loader:({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
