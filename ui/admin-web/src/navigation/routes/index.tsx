import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import SideBar from '@/components/sidebar';
import Auth from '@/auth';
import { ProtectedRoute } from './protect-routes';
import Dashboard from '@/screens/dashboard';
import FourOFour from '@/screens/404';
import Sports from '@/screens/sports';
import SportDetails from '@/screens/sports/details';

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
                        <Sports />
                    </ProtectedRoute>
                } />
                 <Route path="sports/:sportID" element={
                    <ProtectedRoute>
                        <SportDetails />
                    </ProtectedRoute>
                } />
                 <Route path="*" element={
                   <FourOFour />
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
