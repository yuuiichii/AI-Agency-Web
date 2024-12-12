import React from 'react';
import { useFormStore } from '../../../store/formStore';
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import FormSubmissionsTable from './FormSubmissionsTable';
import Settings from './Settings';

const Dashboard = () => {
  const updateSettings = useFormStore((state) => state.updateSettings);

  const handleSettingsSave = (settings: { domain: string; email: string }) => {
    updateSettings(settings);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardStats />
        <div className="mt-8 space-y-8">
          <FormSubmissionsTable />
          <Settings onSave={handleSettingsSave} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;