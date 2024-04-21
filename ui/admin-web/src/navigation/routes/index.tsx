import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import SideBar from '@/components/sidebar';
import Auth from '@/auth';
import { Dashboard } from '@mui/icons-material';
import { ProtectedRoute } from './protect-routes';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="auth" element={<Auth />} />
            <Route element={<SideBar />}>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="sports" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
            </Route>
        </>

    )
);


function AppRoutes() {
    return (
        <RouterProvider router={router} />
    );
}

export default AppRoutes
