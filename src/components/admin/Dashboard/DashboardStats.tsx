import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Settings } from 'lucide-react';
import { useFormStore } from '../../../store/formStore';

const DashboardStats = () => {
  const submissions = useFormStore((state) => state.submissions);
  
  const stats = [
    {
      icon: Users,
      title: 'Total Submissions',
      value: submissions.length,
      color: 'bg-blue-600',
    },
    {
      icon: Mail,
      title: 'Pending Responses',
      value: submissions.filter(s => s.status === 'pending').length,
      color: 'bg-green-600',
    },
    {
      icon: Settings,
      title: 'Response Rate',
      value: `${submissions.length ? Math.round((submissions.filter(s => s.status === 'completed').length / submissions.length) * 100) : 0}%`,
      color: 'bg-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 ${stat.color} rounded-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;