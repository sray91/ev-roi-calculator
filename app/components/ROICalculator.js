// app/components/ROICalculator.js
'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    projectName: '',
    justification: [],
    avgHoursPerShift: '8',
    shiftsPerDay: '1',
    daysPerWeek: '5',
    weeksPerYear: 0,
    avgPeopleWorking: 0,
    laborRate: 0,
    efficiency: '90',
    projectCost: 0,
    maintenanceCost: 0,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleJustificationChange = (option) => {
    const updatedJustification = [...formData.justification];
    const index = updatedJustification.indexOf(option);
    if (index > -1) {
      updatedJustification.splice(index, 1);
    } else {
      updatedJustification.push(option);
    }
    setFormData({ ...formData, justification: updatedJustification });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      avgHoursPerShift,
      shiftsPerDay,
      daysPerWeek,
      weeksPerYear,
      avgPeopleWorking,
      laborRate,
      efficiency,
      projectCost,
      maintenanceCost,
    } = formData;

    const currentCost =
      parseFloat(avgHoursPerShift) *
      avgPeopleWorking *
      parseFloat(shiftsPerDay) *
      parseFloat(daysPerWeek) *
      weeksPerYear *
      laborRate *
      (parseFloat(efficiency) / 100);

    const roboticLaborCost = currentCost * 0.25;

    const roi =
      (((currentCost - roboticLaborCost) - (projectCost + maintenanceCost)) /
        (projectCost + maintenanceCost)) *
      100;

    setResult(roi.toFixed(2));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto py-8 px-4">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label htmlFor="projectName" className="block font-medium">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Justification</label>
            <div className="flex flex-wrap gap-2">
              {['Labor Savings', 'Increased Productivity', 'Quality Improvement', 'Safety'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-2 rounded ${
                    formData.justification.includes(option) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleJustificationChange(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Average Hours per Shift</label>
            <div className="flex flex-wrap gap-2">
              {['4', '6', '8', '12'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-2 rounded ${
                    formData.avgHoursPerShift === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setFormData({ ...formData, avgHoursPerShift: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Shifts per Day</label>
            <div className="flex flex-wrap gap-2">
              {['1', '1.5', '2', '3'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-2 rounded ${
                    formData.shiftsPerDay === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setFormData({ ...formData, shiftsPerDay: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Days per Week</label>
            <div className="flex flex-wrap gap-2">
              {['4', '5', '6', '7'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-2 rounded ${
                    formData.daysPerWeek === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setFormData({ ...formData, daysPerWeek: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="weeksPerYear" className="block font-medium">
              Weeks per Year
            </label>
            <input
              type="number"
              id="weeksPerYear"
              name="weeksPerYear"
              value={formData.weeksPerYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="avgPeopleWorking" className="block font-medium">
              Average People Working
            </label>
            <input
              type="number"
              id="avgPeopleWorking"
              name="avgPeopleWorking"
              value={formData.avgPeopleWorking}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="laborRate" className="block font-medium">
              Labor Rate ($/hr)
            </label>
            <input
              type="number"
              id="laborRate"
              name="laborRate"
              value={formData.laborRate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Estimated Equipment Efficiency</label>
            <div className="flex flex-wrap gap-2">
              {['80', '85', '90', '95', '100'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-2 rounded ${
                    formData.efficiency === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setFormData({ ...formData, efficiency: option })}
                >
                  {option}%
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="projectCost" className="block font-medium">
              Project Cost ($)
            </label>
            <input
              type="number"
              id="projectCost"
              name="projectCost"
              value={formData.projectCost}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="maintenanceCost" className="block font-medium">
              Maintenance Cost ($)
            </label>
            <input
              type="number"
              id="maintenanceCost"
              name="maintenanceCost"
              value={formData.maintenanceCost}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Calculate ROI
          </button>
        </form>

        {/* Result */}
        {result && (
          <div className="mt-8 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Result</h2>
            <p>The ROI for this project is: {result}%</p>
          </div>
        )}
      </div>
    </div>
  );
}