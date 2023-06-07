import './App.css';
import AddExperience from './components/pages/AddExperience';
import ExperienceDetails from './components/pages/ExperienceDetails';
import Home from './components/pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addexperience",
    element: <AddExperience></AddExperience>
  },
  {
    path: '/experiencedetails',
    element: <ExperienceDetails></ExperienceDetails>
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
