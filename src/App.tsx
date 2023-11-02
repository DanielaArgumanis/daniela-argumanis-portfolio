import './App.css';
import { ThemeProvider } from '@emotion/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// @Components
import Home from './components/Home';

// @Theme
import theme from './common/Theme/Theme';

// @Types
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
    ]
  },
  
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
