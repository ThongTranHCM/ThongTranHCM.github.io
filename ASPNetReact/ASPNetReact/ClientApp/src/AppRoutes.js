import { Contacts } from "./components/Contacts";
import { Projects } from "./components/Projects";
import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
];

export default AppRoutes;
