import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Navbar from "../components/Navbar";
import { fertilizers } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Availability = () => {
  // Prepare top 5 for requirement and availability
  const topRequired = useMemo(
    () =>
      [...fertilizers]
        .sort((a, b) => b.requirement - a.requirement)
        .slice(0, 5),
    []
  );
  const topAvailable = useMemo(
    () =>
      [...fertilizers]
        .sort((a, b) => b.availability - a.availability)
        .slice(0, 5),
    []
  );

  // Chart data
  const barData = useMemo(
    () => ({
      labels: fertilizers.map((f) => f.name),
      datasets: [
        {
          label: "Required (kg)",
          data: fertilizers.map((f) => f.requirement),
          backgroundColor: "rgba(16, 185, 129, 0.8)",
          borderRadius: 8,
        },
        {
          label: "Available (kg)",
          data: fertilizers.map((f) => f.availability),
          backgroundColor: "rgba(34, 197, 94, 0.8)",
          borderRadius: 8,
        },
      ],
    }),
    []
  );

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Fertilizer Requirement vs Availability",
        font: { size: 18 },
      },
    },
    scales: {
      x: { ticks: { color: "#065f46", font: { size: 12 } } },
      y: { ticks: { color: "#065f46", font: { size: 12 } } },
    },
  };

  return (
    <div className="w-full min-h-screen bg-green-50">
      <Navbar />

      <main className="md:ml-64 mt-16 px-6 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 md:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight">
              Fertilizer Availability
            </h1>
            <p className="text-green-700 text-lg md:text-xl mb-6">
              Visualize fertilizer requirements and availability. Check the top
              fertilizers for better planning.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg"
            alt="Fertilizer"
            className="rounded-2xl shadow-2xl w-full md:w-96 h-64 object-cover"
          />
        </div>

        {/* Charts Section */}
        <div className="bg-white p-6 rounded-3xl shadow-xl mb-10">
          <Bar data={barData} options={barOptions} />
        </div>

        {/* Top Fertilizers Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Required */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-green-900 font-bold text-xl mb-4">
              Top 5 Fertilizers (Highest Requirement)
            </h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-green-800">
                    Fertilizer
                  </th>
                  <th className="border-b px-4 py-2 text-green-800">
                    Requirement (kg)
                  </th>
                </tr>
              </thead>
              <tbody>
                {topRequired.map((f, i) => (
                  <tr key={i} className="hover:bg-green-100">
                    <td className="px-4 py-2 text-green-800">{f.name}</td>
                    <td className="px-4 py-2 text-green-800">
                      {f.requirement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top Available */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-green-900 font-bold text-xl mb-4">
              Top 5 Fertilizers (Highest Availability)
            </h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-green-800">
                    Fertilizer
                  </th>
                  <th className="border-b px-4 py-2 text-green-800">
                    Available (kg)
                  </th>
                </tr>
              </thead>
              <tbody>
                {topAvailable.map((f, i) => (
                  <tr key={i} className="hover:bg-green-100">
                    <td className="px-4 py-2 text-green-800">{f.name}</td>
                    <td className="px-4 py-2 text-green-800">
                      {f.availability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-400 text-green-100 mt-10">
        <div className="p-4 text-center text-black text-sm">
          © 2025 AgroFert Info. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Availability;
