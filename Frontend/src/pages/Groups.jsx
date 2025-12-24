import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGroups } from "../api/group.api";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGroups().then((res) => setGroups(res.data.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Groups</h2>

      {groups.length === 0 && (
        <p className="text-gray-500">No groups yet</p>
      )}

      <div className="grid gap-4">
        {groups.map((group) => (
          <div
            key={group._id}
            onClick={() => navigate(`/groups/${group._id}`)}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-md"
          >
            <h3 className="font-semibold text-lg">{group.name}</h3>
            <p className="text-gray-500">
              Members: {group.members.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
