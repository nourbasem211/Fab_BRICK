import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import Samples from './pages/Samples';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import BoxDetail from './pages/BoxDetail';
import Option2Detail from './pages/Option2Detail';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'samples', element: <Samples /> },

        { path: 'samples/:slug', element: <BoxDetail /> },        // OPTION 1
        { path: 'samples/option2/:slug', element: <Option2Detail /> }, // OPTION 2

        { path: 'shop', element: <Shop /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
