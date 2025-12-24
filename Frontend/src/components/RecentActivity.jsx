const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl border p-5">
      <h3 className="font-semibold mb-4">Recent Activity</h3>

      {[
        { title: "Lunch", amount: "₹4,000", user: "shekhar" },
        { title: "Electricity Bill", amount: "₹150", user: "John" },
      ].map((item, i) => (
        <div key={i} className="flex justify-between py-3 border-b last:border-none">
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-xs text-gray-500">{item.user} paid</p>
          </div>
          <p className="font-semibold">{item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
