import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CreateEvent from "../pages/CreateEvent";
import UpcomingEvents from "../pages/UpcomingEvents";
import JoinedEvent from "../pages/JoinedEvent";
import ManageEvents from "../pages/ManageEvents";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EventDetails from "../pages/EventDetails";
import EditEvent from "../pages/EditEvent";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: Home},
            {
                path: 'create-event',
                element: <CreateEvent />
            },
            {
                path: 'upcoming-events',
                element: <UpcomingEvents />
            },
            {
                path: 'event-detail/:id',
                element: <EventDetails />
            },
            {
                path: 'joined-event',
                element: <JoinedEvent />
            },
            {
                path: 'manage-events',
                element: <ManageEvents />
            },
            {
                path: 'edit-event/:id',
                element: <EditEvent />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    }
]);

export default router;