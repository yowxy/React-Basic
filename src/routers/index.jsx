import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../Layouts/RootLayout";

import Homepage from "../pages/index";
import About from "../pages/About"
import Blog from "../pages/Blogs";
import Posts from "../pages/Blogs/_id"
import ErrorPage from "../components/ErrorPage";

import { posts, postsById } from "../apis/loader";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Rootlayout    />,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Homepage/>
            },
            {
                path: '/blog',
                element: <Blog/>,
                loader: posts,
            },
            {
                path: '/blog/:id',
                element: <Posts/>,
                loader: postsById,  
            },
            {
                path: '/about',
                element: <About/>
            },
        ]
    },
]);