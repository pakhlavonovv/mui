import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from '../../App'
import { SignIn, AdminLayout, StudentLayout } from "@pages";

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route index element={<SignIn/>}/>
            <Route path='admin' element={<AdminLayout/>}/>
            <Route path='student' element={<StudentLayout/>}/>
          </Route>
        )
      );
      return <RouterProvider router={router}/>
}

export default Index