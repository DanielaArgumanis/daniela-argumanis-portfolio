import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// @Components
import Layout from './components/Layout';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/articles',
        element: <Publications />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
