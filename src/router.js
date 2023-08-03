import {
    createBrowserRouter,
} from "react-router-dom";

// ** Routes import
import App from './App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
]);