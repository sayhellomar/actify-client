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
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: Home},
            {
                path: 'create-event',
                element: <PrivateRoute><CreateEvent /></PrivateRoute>
            },
            {
                path: 'upcoming-events',
                element: <UpcomingEvents />
            },
            {
                path: 'event-detail/:id',
                loader: ({params}) => fetch(`http://localhost:3000/event/${params.id}`),
                element: <EventDetails />
            },
            {
                path: 'joined-event',
                element: <PrivateRoute><JoinedEvent /></PrivateRoute>
            },
            {
                path: 'manage-events',
                element: <PrivateRoute><ManageEvents /></PrivateRoute>
            },
            {
                path: 'edit-event/:id',
                loader: ({params}) => fetch(`http://localhost:3000/event/${params.id}`),
                element: <PrivateRoute><EditEvent /></PrivateRoute>
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