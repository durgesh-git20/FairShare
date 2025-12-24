import StatCard from "../components/StatCard";
import RecentActivity from "../components/RecentActivity";
import GroupList from "../components/GroupList";

const Dashboard = () => {
  const groups = [
    { _id: 1, name: "Weekend Trip" },
    { _id: 2, name: "Apartment" },
    { _id: 3, name: "Trip" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, shekhar! 👋
          </h1>
          <p className="text-gray-500">
            Here's your expense summary across 3 groups
          </p>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          + Add Expense
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Net Balance" value="₹3,000" subtitle="You are owed" color="text-green-600" />
        <StatCard title="You are owed" value="₹3,000" subtitle="From 3 people" color="text-green-600" />
        <StatCard title="You owe" value="₹0" subtitle="To 0 people" color="text-red-500" />
        <StatCard title="Total Expenses" value="₹4,720" subtitle="4 expenses tracked" color="text-black" />
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity />
        <GroupList groups={groups} />
      </div>
    </div>
  );
};

export default Dashboard;
