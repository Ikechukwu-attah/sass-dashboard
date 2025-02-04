"use client";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";

const barData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 180 },
  { month: "Mar", users: 250 },
  { month: "Apr", users: 320 },
  { month: "May", users: 400 },
];

const pieData = [
  { id: "Subscriptions", label: "Subscriptions", value: 6000 },
  { id: "One-time Sales", label: "One-time Sales", value: 2500 },
  { id: "Ads Revenue", label: "Ads Revenue", value: 1500 },
];

const deviceData = [
  { id: "Mobile", label: "Mobile", value: 55 },
  { id: "Desktop", label: "Desktop", value: 35 },
  { id: "Tablet", label: "Tablet", value: 10 },
];

const transactionsData = [
  {
    id: "transactions",
    data: [
      { x: "Jan", y: 150 },
      { x: "Feb", y: 300 },
      { x: "Mar", y: 450 },
      { x: "Apr", y: 200 },
      { x: "May", y: 600 },
    ],
  },
];

const theme = {
  text: { fontSize: 14, fill: "#fff" },
  axis: { ticks: { text: { fontSize: 14, fill: "#fff" } } },
  tooltip: { container: { background: "#333", color: "#fff" } },
};

const AnalyticsDashboard = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 px-6">
      {/* User Growth Over Time */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg w-full max-h-[450px] overflow-hidden">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          User Growth Over Time
        </h2>
        <div className="h-[400px] w-full">
          <ResponsiveBar
            data={barData}
            keys={["users"]}
            indexBy="month"
            margin={{ top: 40, right: 50, bottom: 60, left: 80 }}
            padding={0.4}
            colors={{ scheme: "set2" }}
            axisBottom={{ tickSize: 5, tickPadding: 10, tickRotation: 0 }}
            axisLeft={{ tickSize: 5, tickPadding: 10, tickRotation: 0 }}
            layout="vertical"
            enableLabel={false}
            theme={theme}
          />
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg w-full max-h-[450px] overflow-hidden flex justify-center">
        <div className="w-full h-[400px] flex justify-center items-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Revenue Breakdown
          </h2>
          <ResponsivePie
            data={pieData}
            margin={{ top: 40, right: 50, bottom: 60, left: 50 }}
            innerRadius={0.5}
            padAngle={1}
            cornerRadius={5}
            colors={{ scheme: "set2" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
            enableArcLabels={true}
            arcLabelsTextColor="#fff"
            enableArcLinkLabels={false}
            theme={theme}
          />
        </div>
      </div>

      {/* Active Users by Device */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg w-full max-h-[450px] overflow-hidden flex justify-center">
        <div className="w-full h-[400px] flex justify-center items-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Active Users by Device
          </h2>
          <ResponsivePie
            data={deviceData}
            margin={{ top: 40, right: 50, bottom: 60, left: 50 }}
            innerRadius={0.7}
            padAngle={1}
            cornerRadius={5}
            colors={{ scheme: "pastel1" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
            enableArcLabels={true}
            arcLabelsTextColor="#fff"
            enableArcLinkLabels={false}
            theme={theme}
          />
        </div>
      </div>

      {/* Transactions Over Time */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg w-full max-h-[450px] overflow-hidden">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Transactions Over Time
        </h2>
        <div className="h-[400px] w-full">
          <ResponsiveLine
            data={transactionsData}
            margin={{ top: 50, right: 50, bottom: 60, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{ type: "linear", stacked: true }}
            axisBottom={{ tickSize: 5, tickPadding: 10 }}
            axisLeft={{ tickSize: 5, tickPadding: 10 }}
            colors={{ scheme: "set2" }}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
