import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";
 import HomePage from "./pages/HomePage.js";
 import EventsPage, { loader as eventsLoader} from "./pages/EventsPage.js"
 import EventDetailPage, { 
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetailPage.js"
import NewEventPage from "./pages/NewEventPage.js"
 import EditEventPage from "./pages/EditEventPage.js"
 import RootLayout from "./pages/RootLayout.js";
 import EventsRootLayout from "./pages/EventsRootLayout.js";
import ErrorPage from "./pages/ErrorPage.js";
import { action as manipulateEventAction } from './components/EventForm.js';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

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
                    action: deleteEventAction
                  },
                  { 
                    path: 'edit', 
                    element: <EditEventPage />,
                    action: manipulateEventAction
                  },
                  { 
                    path: 'new', 
                    element: <NewEventPage />,
                    action: manipulateEventAction
                  },
                ]
              }, 
              {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
              },              
            ]
          },          
        ]
      }      
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
