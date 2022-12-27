import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import './index.css';
import BudgetList from './screens/budget/BudgetList';
import BudgetForm from './screens/budget/BudgetForm';
import BudgetDetail from './screens/budget/BudgetDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/budget" replace />,
    },
    {
        path: '/budget',
        element: <BudgetList />,
    },
    {
        path: '/budget/form',
        element: <BudgetForm />,
    },
    {
        path: '/budget/:budgetId',
        element: <BudgetDetail />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
