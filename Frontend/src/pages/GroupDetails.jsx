import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const GroupDetails = () => {
  const { id } = useParams();

  const [group, setGroup] = useState(null);
  const [balances, setBalances] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const fetchData = async () => {
    try {
      // get group
      const groupRes = await api.get("/groups");
      const foundGroup = groupRes.data.data.find((g) => g._id === id);
      setGroup(foundGroup);

      // get balances
      const balanceRes = await api.get("/balances");
      setBalances(balanceRes.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleAddExpense = async (e) => {
    e.preventDefault();

    try {
      await api.post("/expenses", {
        groupId: id,
        description,
        amount: Number(amount),
        paidBy,
        splitType: "EQUAL",
      });

      // reset form
      setDescription("");
      setAmount("");
      setPaidBy("");

      // refresh data
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add expense");
    }
  };

  if (!group) return <p className="text-gray-500">Loading group...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Group Title */}
      <h1 className="text-3xl font-bold mb-4">{group.name}</h1>

      {/* Members */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Members</h2>
        <ul className="list-disc ml-5 text-gray-700">
          {group.members.map((m) => (
            <li key={m._id}>{m.name}</li>
          ))}
        </ul>
      </div>

      {/* Add Expense */}
      <div className="border rounded-lg p-4 mb-6">
        <h2 className="font-semibold mb-3">Add Expense</h2>

        <form onSubmit={handleAddExpense} className="grid gap-3">
          <input
            className="border p-2 rounded"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            className="border p-2 rounded"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <select
            className="border p-2 rounded"
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
            required
          >
            <option value="">Paid by</option>
            {group.members.map((m) => (
              <option key={m._id} value={m._id}>
                {m.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Balances */}
      <div>
        <h2 className="font-semibold mb-2">Balances</h2>

        {balances.length === 0 && (
          <p className="text-gray-500">No balances yet</p>
        )}

        {balances.map((b, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 rounded mb-2"
          >
            <span className="font-medium">{b.from}</span> owes{" "}
            <span className="font-medium">{b.to}</span>{" "}
            <span className="text-green-600 font-semibold">
              ₹{b.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupDetails;
