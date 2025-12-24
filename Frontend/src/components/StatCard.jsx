const StatCard = ({ title, value, subtitle, color }) => {
  return (
    <div className="bg-white rounded-xl border p-5 flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        ↗
      </div>
    </div>
  );
};

export default StatCard;

