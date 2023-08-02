import { Contacts } from "./components/Contacts";
import { Education } from "./components/Education";
import { Careers } from "./components/Careers";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/education',
    element: <Education />
  },
  {
    path: '/careers',
    element: <Careers />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
