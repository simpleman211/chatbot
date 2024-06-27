import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Assitants from "../pages/Assitants";
import RoleAdmin from "../compoments/RoleAdmin";
import AssitantsBot from "../compoments/AssitantsBot";
import UserWishlist from "../compoments/UserWishlist";
import UploadFile from "../compoments/UploadFile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'upload-files',
                element: <UploadFile/>
            },
            {
                path: 'admin',
                element: <Admin/>,
                children: [
                    {
                        path: 'assitants-settings',
                        element: <Assitants/>,
                        children: [
                            {
                                path: 'admin-bot',
                                element: <AssitantsBot/>
                            }, 
                            {
                                path: 'wishlist-admin',
                                element: <UserWishlist/>,
                            },
                            {
                                path: 'role-admin',
                                element: <RoleAdmin/>
                            },
                        ]
                    }
                ]
            }
        ]
    }, 
   
])

export default router