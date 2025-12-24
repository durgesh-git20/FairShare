import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">SplitEase</h1>

      <div className="flex gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-green-600">Dashboard</Link>
        <Link to="/groups" className="hover:text-green-600">Groups</Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium">shekhar</p>
          <p className="text-xs text-gray-500">shera@gmail.com</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
          S
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
