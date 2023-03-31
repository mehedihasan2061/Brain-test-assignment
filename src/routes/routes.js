import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Main from "../layout/Main";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                loader: () => {
                  return  fetch('https://openapi.programming-hero.com/api/quiz')
                },        
                element: <Home></Home>
            },
            {
                path: '/quiz/:id',
                loader: ({params}) => {
                    return fetch(
                      `https://openapi.programming-hero.com/api/quiz/${params.id}`
                    )
                },
                element:<Quiz></Quiz>
            },
            {
                path: '/statistics',
                loader: () => {
                    return fetch ('https://openapi.programming-hero.com/api/quiz')
                },
                element:<Statistics></Statistics>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
           
        ]
    }

])