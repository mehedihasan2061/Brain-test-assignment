import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Main from "../layout/Main";

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
           
           
        ]
    }

])