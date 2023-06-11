import './App.css';
import Header from './components/UIC/Header';
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
    path: '/experiencedetails/:id',
    element: <ExperienceDetails></ExperienceDetails>
  }
]);

function App() {
  return (
    <>
    <Header></Header>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
