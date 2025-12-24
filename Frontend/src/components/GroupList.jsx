const GroupList = ({ groups }) => {
  return (
    <div className="bg-white rounded-xl border p-5">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Your Groups</h3>
        <button className="border rounded px-3 py-1 text-sm">+ New</button>
      </div>

      {groups.map((g) => (
        <div key={g._id} className="p-3 bg-gray-50 rounded mb-2 flex justify-between">
          <p className="font-medium">{g.name}</p>
          <span>›</span>
        </div>
      ))}
    </div>
  );
};

export default GroupList;

