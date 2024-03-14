import { createBrowserRouter } from 'react-router-dom';

import Example from '@/pages/example/index.tsx';
import Landing from '@/pages/landing/index.tsx';
import LandingLayout from '@/pages/landing/layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: '/example',
    element: <Example />,
  },
]);

export default router;
