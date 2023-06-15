import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddTask from "../MainLayout/Home/AddTask/AddTask";
import AllTask from "../MainLayout/Home/AllTask/AllTask";
import UpdateTask from "../MainLayout/Home/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'addTask',
            element:<AddTask></AddTask>
        },
        {
            path:'allTask',
            element:<AllTask></AllTask>
        },
        {
            path:'updateTask/:id',
            element:<UpdateTask></UpdateTask>
        }
      ]
    },
  ]);


  export default router