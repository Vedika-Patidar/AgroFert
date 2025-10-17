// src/pages/Dashboard.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTable, useSortBy, useFilters } from "react-table";
import Navbar from "../components/Navbar";
import { fertilizers } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Simple dropdown filter for react-table
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = useMemo(() => {
    const opts = new Set();
    preFilteredRows.forEach((row) => opts.add(row.values[id]));
    return [...opts.values()];
  }, [id, preFilteredRows]);

  return (
    <select
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value || undefined)}
      className="border rounded px-2 py-1 text-green-800"
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// Line chart showing requirement over months (sample)
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Urea",
      data: [800, 900, 700, 1000, 850, 950],
      borderColor: "#16a34a",
      backgroundColor: "rgba(22, 163, 74, 0.3)",
      tension: 0.4,
    },
    {
      label: "DAP",
      data: [600, 500, 700, 650, 700, 750],
      borderColor: "#facc15",
      backgroundColor: "rgba(250, 204, 21, 0.3)",
      tension: 0.4,
    },
  ],
};

const Dashboard = () => {
  // React-table setup
  const data = useMemo(() => fertilizers, []);
  const columns = useMemo(
    () => [
      { Header: "Fertilizer", accessor: "name" },
      {
        Header: "Type",
        accessor: "type",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "State",
        accessor: "state",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      { Header: "Required (kg)", accessor: "requirement" },
      { Header: "Available (kg)", accessor: "availability" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters, useSortBy);

  // Top 5 fertilizers
  const topRequired = [...fertilizers]
    .sort((a, b) => b.requirement - a.requirement)
    .slice(0, 5);
  const leastAvailable = [...fertilizers]
    .sort((a, b) => a.availability - b.availability)
    .slice(0, 5);

  // Bar chart showing stock availability
  const barData = {
    labels: fertilizers.map((f) => f.name),
    datasets: [
      {
        label: "Available (kg)",
        data: fertilizers.map((f) => f.availability),
        backgroundColor: [
          "#a7f3d0",
          "#fde68a",
          "#fca5a5",
          "#34d399",
          "#f87171",
          "#93c5fd",
          "#fbbf24",
          "#fcd34d",
          "#60a5fa",
          "#f472b6",
          "#10b981",
          "#f59e0b",
          "#818cf8",
        ],
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-green-50">
      <Navbar />

      <main className="md:ml-64 mt-16 px-6 py-6 flex flex-col gap-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-green-50 to-green-100 p-8 md:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
        >
          <div className="flex-1 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight">
              AgroFert Dashboard
            </h1>
            <p className="text-green-700 text-lg md:text-xl mb-6">
              Track fertilizer requirements and availability across India.
              Filter by state and type for detailed insights.
            </p>
          </div>

          <motion.img
            src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg"
            alt="Fertilizer"
            className="rounded-2xl shadow-2xl w-full md:w-96 h-64 object-cover z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Top 5 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-green-900 font-bold text-xl mb-4">
              Top 5 Fertilizers (Highest Requirement)
            </h3>
            <ul className="list-disc list-inside text-green-700">
              {topRequired.map((f, i) => (
                <li key={i}>
                  {f.name} - {f.requirement} kg
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-green-900 font-bold text-xl mb-4">
              Top 5 Fertilizers (Lowest Availability)
            </h3>
            <ul className="list-disc list-inside text-green-700">
              {leastAvailable.map((f, i) => (
                <li key={i}>
                  {f.name} - {f.availability} kg
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-2xl shadow-xl overflow-x-auto">
          <h3 className="text-green-900 font-bold text-xl mb-4">
            Fertilizer Data
          </h3>

          {/* Filters */}
          <div className="flex gap-4 mb-4">
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map(
                (column) =>
                  column.Filter && (
                    <div key={column.id}>{column.render("Filter")}</div>
                  )
              )
            )}
          </div>

          {/* Table */}
          <table
            {...getTableProps()}
            className="w-full text-left border-collapse"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="border-b px-4 py-2 cursor-pointer text-green-800"
                      key={column.id}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    key={i}
                    className="hover:bg-green-100"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-2 text-green-800"
                        key={cell.column.id}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-green-900 font-bold text-xl mb-4">
              Fertilizer Requirement Over Months
            </h3>
            <Line data={lineData} />
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-green-900 font-bold text-xl mb-4">
              Current Stock Availability
            </h3>
            <Bar data={barData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-200 text-black mt-10">
        <div className="p-4 text-center text-black text-sm">
          © 2025 AgroFert Info. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
