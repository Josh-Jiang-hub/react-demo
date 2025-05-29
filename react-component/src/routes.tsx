import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import HomePage from './pages/Home/index';
export const routes: (RouteObject & { title: string })[] = [
  {
    title: '首页',
    path: '/',
    element: <HomePage />,
  },
  {
    title: 'IndexBar',
    path: '/index-bar',
    lazy: async () => {
      const { default: Component } = await import('./pages/IndexBar');
      return { Component };
    },
  },
  {
    title: 'HookDemo',
    path: '/hook-demo',
    lazy: async () => {
      const { default: Component } = await import('./pages/HookDemo');
      return { Component };
    },
  },
];

export const RouterComponent = createBrowserRouter(routes);
