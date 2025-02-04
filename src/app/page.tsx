import AnalyticsDashboard from "@/components/AnalyticsDashboard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen overflow-auto px-6">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
          <h2 className="text-gray-600 dark:text-gray-300 font-semibold">
            Total Users
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            1,230
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
          <h2 className="text-gray-600 dark:text-gray-300 font-semibold">
            Revenue
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            $12,450
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
          <h2 className="text-gray-600 dark:text-gray-300 font-semibold">
            Transactions
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            3,987
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
          <h2 className="text-gray-600 dark:text-gray-300 font-semibold">
            Growth
          </h2>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            +15%
          </p>
        </div>
      </div>

      {/* Analytics Dashboard (Charts Section) */}
      <AnalyticsDashboard />
    </div>
  );
}
