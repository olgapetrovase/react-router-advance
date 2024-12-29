import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";
 import HomePage from "./pages/HomePage.js";
 import EventsPage from "./pages/EventsPage.js"
 import EventDetailPage from "./pages/EventDetailPage.js"
 import NewEventPage from "./pages/NewEventPage.js"
 import EditEventPage from "./pages/EditEventPage.js"
 import RootLayout from "./pages/RootLayout.js";
import EventsRootLayout from "./pages/EventsRootLayout.js";

const router = createBrowserRouter([
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage />},
          { 
            path: 'events', 
            element: <EventsRootLayout />, 
            children: [
              { 
                index: true, 
                element: <EventsPage />, 
                loader: async () => {
                  const response = await fetch('http://localhost:8080/events');
                    if (!response.ok) {
                      // ...
                    } else {
                      const resData = await response.json();
                      return resData.events;
                    }
                },
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
