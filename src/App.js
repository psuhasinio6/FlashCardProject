
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import  Home from './components/Home/Home';
import Mycalendar from './components/Mycalendar/Mycalendar';
import Widgets from './components/Widgets/Widgets';

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
          path:"/Mycalendar",
          element:<Mycalendar />
        },
        {
          path:"/Widgets",
          element:<Widgets />
        },
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