import React from 'react'
import Committees from './components/Committees'
import RootLayout from './components/RootLayout'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import AudiBooking from './components/AudiBooking/AudiBooking'
import BookingHistory from './components/BookingHistory/BookingHistory'
import RegisterEvent from './components/RegisterEvent/RegisterEvent'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import ComingSoon from './components/ComingSoon'
function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <AudiBooking /> 
        },
        {
          path: '/committees',
          element: <Committees />
        },
        {
          path: '/booking-history',
          element: <BookingHistory />
        },
        {
          path: '/register-event',
          element: <RegisterEvent />
        },
        {
          path: '/upcoming-events',
          element: <UpcomingEvents />
        },
        {
          path: "/coming-soon",
          element: <ComingSoon />
        }
      ]
    }
  ])
  return (
    <div style={{backgroundColor: "#edede9"}}>
      {/* <h1 className='text-center bg-dark text-white'>Event Management System</h1> */}
      {/* <Committees /> */}
      <div>
        <RouterProvider router={routerObj} />
      </div>
    </div>
  )
}

export default App