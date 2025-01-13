import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Users, Briefcase, UsersRound, FolderKanban, TrendingUp, 
  Activity, Clock, DollarSign, MapPin, Repeat, Calendar 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, 
  ComposedChart, Area 
} from 'recharts';

const Analytics = () => {
  const { analytics } = useSelector((state) => state.dashboard);

  const stats = [
    { icon: Users, label: 'Total Users', value: analytics.totalUsers },
    { icon: DollarSign, label: 'Total Sales', value: `$${analytics.totalSales.toLocaleString()}` },
    { icon: Repeat, label: 'Repeat Customers', value: `${analytics.repeatCustomerRate}%` },
    { icon: UsersRound, label: 'Active Staff', value: analytics.activeStaff },
  ];

  const salesData = [
    { month: 'Jan', sales: 32000, customers: 120, timestamp: '2024-01-31' },
    { month: 'Feb', sales: 48000, customers: 145, timestamp: '2024-02-29' },
    { month: 'Mar', sales: 64000, customers: 180, timestamp: '2024-03-31' },
    { month: 'Apr', sales: 75000, customers: 210, timestamp: '2024-04-30' },
    { month: 'May', sales: 95000, customers: 260, timestamp: '2024-05-31' },
    { month: 'Jun', sales: 112000, customers: 290, timestamp: '2024-06-30' },
  ];

  const regionalData = [
    { region: 'North America', sales: 45, customers: 580, timestamp: '2024-03-15' },
    { region: 'Europe', sales: 30, customers: 420, timestamp: '2024-03-15' },
    { region: 'Asia Pacific', sales: 15, customers: 180, timestamp: '2024-03-15' },
    { region: 'Latin America', sales: 10, customers: 70, timestamp: '2024-03-15' },
  ];

  const customerRetentionData = [
    { month: 'Jan', newCustomers: 80, returning: 40, timestamp: '2024-01-31' },
    { month: 'Feb', newCustomers: 95, returning: 50, timestamp: '2024-02-29' },
    { month: 'Mar', newCustomers: 120, returning: 60, timestamp: '2024-03-31' },
    { month: 'Apr', newCustomers: 140, returning: 70, timestamp: '2024-04-30' },
    { month: 'May', newCustomers: 160, returning: 100, timestamp: '2024-05-31' },
    { month: 'Jun', newCustomers: 180, returning: 110, timestamp: '2024-06-30' },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Analytics Overview</h2>
        <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4 mr-2" />
          <span>Last updated: {new Date().toLocaleString()}</span>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-md p-6 flex items-center"
          >
            <div className="bg-blue-100 p-3 rounded-lg">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sales Trends */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Sales Trends</h3>
            </div>
            <span className="text-sm text-gray-500">
              <Calendar className="w-4 h-4 inline mr-1" />
              Last 6 months
            </span>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="sales" fill="#3B82F6" />
                <Line yAxisId="right" type="monotone" dataKey="customers" stroke="#10B981" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Regional Distribution</h3>
            </div>
            <span className="text-sm text-gray-500">
              <Clock className="w-4 h-4 inline mr-1" />
              Updated hourly
            </span>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionalData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="sales"
                >
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {regionalData.map((entry, index) => (
              <div key={entry.region} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-sm text-gray-600">{entry.region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Retention */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Repeat className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Customer Retention</h3>
          </div>
          <span className="text-sm text-gray-500">
            <Calendar className="w-4 h-4 inline mr-1" />
            Monthly analysis
          </span>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={customerRetentionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="newCustomers" name="New Customers" fill="#3B82F6" />
              <Bar dataKey="returning" name="Returning Customers" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;