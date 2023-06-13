
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import  Home from './components/Home';
import Mycalendar from './components/MyCalendar';
import Widgets from './components/Widgets';
import Addcard from './components/Addcard';

function App() {

  const browserRouter=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/MyCalendar",
          element:<Mycalendar />
        },
        {
          path:"/Widgets",
          element:<Widgets />
        },
        {
          path:"/Addcard",
          element:<Addcard/>
        }
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;