import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";
 import HomePage from "./pages/HomePage.js";
 import EventsPage, { loader as eventsLoader} from "./pages/EventsPage.js"
 import EventDetailPage, { loader as eventDetailLoader} from "./pages/EventDetailPage.js"
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
              {
                path: ':some-id',    
                id: 'event-detail',            
                loader: eventDetailLoader,
                children: [
                  { 
                    index: true, 
                    element: <EventDetailPage />,
                  },
                  { 
                    path: 'edit', 
                    element: <EditEventPage />
                  },
                ]
              },              
              { path: 'new', element: <NewEventPage />},               
            ]
          },          
        ]
      }      
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
