// src/index.tsx или ваш основной файл для роутинга
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import ErrorBoundary from './shared/ui/ErrorBoundary/ErrorBoundary'; 

import { Provider } from 'react-redux';
import store from '@/store/store';
import "@/styles/index.scss";

import { App } from './components/App';
import { Shop } from '@/pages/ShopPage';
import { Create } from '@/pages/AboutPage'; 
import { Item } from '@/pages/ItemPage';
import { Edit } from '@/pages/EditPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/products" replace />,
            },
            {
                path: '/create',
                element: (
                    <Suspense fallback="Loading...">
                        <Create />
                    </Suspense>
                ),
            },
            {
                path: '/products',
                element: (
                    <Suspense fallback="Loading...">
                        <Shop />
                    </Suspense>
                ),
            },
            {
                path: '/product/:id',
                element: (
                    <Suspense fallback="Loading...">
                        <Item />
                    </Suspense>
                ),
            },
            {
                path: '/edit/:id',
                element: (
                    <Suspense fallback="Loading...">
                        <Edit />
                    </Suspense>
                ),
            },
            {
                path: '*',
                element: (
                    <Suspense fallback="Loading...">
                        <NotFoundPage />
                    </Suspense>
                ),
            },
        ],
    },
]);

container.render(
    <Provider store={store}>
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </Provider>
);
