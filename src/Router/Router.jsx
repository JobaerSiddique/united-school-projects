import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../SecureWork/Login/Login";
import Register from "../SecureWork/Register/Register";
import OnlineAdmissionForm from "../Pages/Online Systems/OnlineAdmissionForm";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'onlineAdmission',
                element:<OnlineAdmissionForm/>
            }
        ]

    }
])