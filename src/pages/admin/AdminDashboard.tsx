import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-4 lg:p-8 pt-16 lg:pt-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <Link
            to="/admin/portfolio"
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">Portfolio Management</h2>
            <p className="text-gray-400">Manage portfolio items</p>
          </Link>
          <Link
            to="/admin/contact"
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">Contact Management</h2>
            <p className="text-gray-400">View and manage contact inquiries</p>
          </Link>
          <Link
            to="/admin/upload"
            className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">Upload Files</h2>
            <p className="text-gray-400">Upload images and videos</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
