import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Overview } from '../../components/dashboard/Overview';
import { IdeaValidator } from '../../components/dashboard/IdeaValidator';
import { CommunityBlog } from '../../components/dashboard/CommunityBlog';
import { SavedProjects } from '../../components/dashboard/SavedProjects';
import { ProjectPlanner } from '../../components/dashboard/ProjectPlanner';

export const Dashboard = () => {
    const { user, loading } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');

    if (loading) {
        return <div className="min-h-screen bg-dark-bg flex items-center justify-center text-white">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab} user={user}>
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'projects' && <SavedProjects />}
            {activeTab === 'planner' && <ProjectPlanner />}
            {activeTab === 'validate' && <IdeaValidator />}
            {activeTab === 'community' && <CommunityBlog />}
            {activeTab === 'roadmap' && (
                <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Roadmap Feature Coming Soon</h3>
                    <p className="text-zinc-400">Generate step-by-step execution plans for your ideas.</p>
                </div>
            )}
            {activeTab === 'settings' && (
                <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Settings</h3>
                    <p className="text-zinc-400">Manage your profile and subscription tiers.</p>
                </div>
            )}
        </DashboardLayout>
    );
};
