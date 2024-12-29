import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";
 import HomePage from "./pages/HomePage.js";
 import EventsPage, { loader as eventsLoader} from "./pages/EventsPage.js"
 import EventDetailPage from "./pages/EventDetailPage.js"
 import NewEventPage from "./pages/NewEventPage.js"
 import EditEventPage from "./pages/EditEventPage.js"
 import RootLayout from "./pages/RootLayout.js";
 import EventsRootLayout from "./pages/EventsRootLayout.js";
import ErrorPage from "./pages/ErrorPage.js";

const router = createBrowserRouter([
      {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage />},
          { 
            path: 'events', 
            element: <EventsRootLayout />, 
            children: [
              { 
                index: true, 
                element: <EventsPage />, 
                loader: eventsLoader,
              },
              { path: ':some-id', element: <EventDetailPage />},
              { path: 'new', element: <NewEventPage />}, 
              { path: ':some-id/edit', element: <EditEventPage />},
            ]
          },          
        ]
      }      
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
