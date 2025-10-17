// src/pages/TypePage.jsx
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { fertilizers } from "../data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TypePage = () => {
  const { type } = useParams();
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);

  const filteredFertilizers = useMemo(
    () =>
      fertilizers.filter((f) => f.type.toLowerCase() === type.toLowerCase()),
    [type]
  );

  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="w-full min-h-screen bg-green-50">
      <Navbar />
      <main className="md:ml-64 mt-16 px-6 py-6">
        {/* Header */}
        <div
          className="w-full h-64 rounded-3xl mb-8 flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80')`,
          }}
        >
          <div className="bg-green-900/50 p-6 rounded-xl">
            <h1 className="text-4xl font-extrabold text-white mb-2">
              {typeCapitalized} Fertilizers
            </h1>
            <p className="text-green-200">
              Discover essential fertilizers for {typeCapitalized} crops, learn
              their uses, availability, and benefits for sustainable farming.
            </p>
          </div>
        </div>

        {/* Combined Chart Section */}
        <div className="bg-white p-6 rounded-3xl shadow-xl mb-10">
          <h2 className="text-green-900 font-bold text-2xl mb-4">
            Requirement vs Availability
          </h2>
          <p className="text-green-700 mb-4">
            This chart shows the required and available quantities of each
            fertilizer type. Plan your farming activities accordingly.
          </p>
          <Bar
            data={{
              labels: filteredFertilizers.map((f) => f.name),
              datasets: [
                {
                  label: "Required (kg)",
                  data: filteredFertilizers.map((f) => f.requirement),
                  backgroundColor: "rgba(16, 185, 129, 0.8)",
                  borderRadius: 6,
                },
                {
                  label: "Available (kg)",
                  data: filteredFertilizers.map((f) => f.availability),
                  backgroundColor: "rgba(34, 197, 94, 0.8)",
                  borderRadius: 6,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#065f46",
                    font: { size: 14, weight: "bold" },
                  },
                },
                title: {
                  display: true,
                  text: `${typeCapitalized} Fertilizer Requirement vs Availability`,
                  color: "#065f46",
                  font: { size: 18, weight: "bold" },
                },
              },
              scales: {
                x: {
                  ticks: { color: "#065f46" },
                  grid: { color: "rgba(34,197,94,0.1)" },
                },
                y: {
                  ticks: { color: "#065f46" },
                  grid: { color: "rgba(34,197,94,0.1)" },
                },
              },
            }}
          />
        </div>

        {/* Fertilizer Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative h-64">
          {filteredFertilizers.map((fertilizer) => {
            const isExpanded = expandedCard === fertilizer.id;

            const chartData = {
              labels: ["Required", "Available"],
              datasets: [
                {
                  label: "Kg",
                  data: [fertilizer.requirement, fertilizer.availability],
                  backgroundColor: ["#10b981", "#f59e0b"],
                  borderRadius: 4,
                },
              ],
            };

            const chartOptions = {
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                x: { grid: { display: false } },
                y: { grid: { display: false }, beginAtZero: true },
              },
            };

            return (
              <motion.div
                key={fertilizer.id}
                layout
                onClick={() =>
                  setExpandedCard(isExpanded ? null : fertilizer.id)
                }
                className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 relative z-10`}
                style={{
                  filter:
                    expandedCard && !isExpanded
                      ? "blur(2px) brightness(0.8)"
                      : "none",
                  pointerEvents: expandedCard && !isExpanded ? "none" : "auto",
                  height: isExpanded ? "auto" : "300px",
                }}
              >
                <img
                  src={fertilizer.image}
                  alt={fertilizer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-green-900 font-bold text-xl mb-2">
                    {fertilizer.name}
                  </h2>
                  <Bar
                    data={chartData}
                    options={chartOptions}
                    height={isExpanded ? 150 : 80}
                  />
                  {isExpanded && (
                    <div className="mt-4 text-green-700">
                      <p className="mb-2">{fertilizer.description}</p>
                      <p className="mb-2">
                        <span className="font-semibold">Usage:</span>{" "}
                        {fertilizer.usage}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">Crops:</span>{" "}
                        {fertilizer.crops.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default TypePage;
