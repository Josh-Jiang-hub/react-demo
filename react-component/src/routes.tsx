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
  {
    title: 'TestModal',
    path: '/ebay-modal',
    lazy: async () => {
      const { default: Component } = await import('./pages/EbayModal');
      return { Component };
    },
  },
  {
    title: 'TestImage',
    path: '/test-image',
    lazy: async () => {
      const { default: Component } = await import('./pages/TestImage');
      return { Component };
    },
  },
  {
    title: 'Utils',
    path: '/utils-demo',
    lazy: async () => {
      const { default: Component } = await import('./pages/UtilsDemo');
      return { Component };
    },
  },
  {
    title: 'Utils',
    path: '/test-form',
    lazy: async () => {
      const { default: Component } = await import('./pages/UtilsDemo');
      return { Component };
    },
  },
];

export const RouterComponent = createBrowserRouter(routes);
