import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const Dashboard = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen bg-dark-bg flex items-center justify-center text-white">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="min-h-screen bg-dark-bg text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>Welcome, {user.user_metadata?.full_name || user.email}!</p>
            {/* Dashboard content goes here */}
        </div>
    );
};
