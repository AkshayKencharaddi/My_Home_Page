import React, { useState } from 'react';

const RightColumn = () => {
  // Pre-populated random progress entries
  const [progresses, setProgresses] = useState([
    { 
      id: 1, 
      title: 'Project Alpha - Phase 1', 
      summary: 'Completed the first phase of Project Alpha, including initial setup and design implementation.', 
      image: '', 
      time: '10/20/2024, 3:00:00 PM' 
    },
    { 
      id: 2, 
      title: 'Bug Fix in Task Manager', 
      summary: 'Resolved critical bugs in the task management system and improved performance.', 
      image: '', 
      time: '10/21/2024, 12:45:00 PM' 
    },
    { 
      id: 3, 
      title: 'New Feature: Dashboard Analytics', 
      summary: 'Added new analytics dashboard for tracking user engagement and activity.', 
      image: 'https://via.placeholder.com/150', 
      time: '10/22/2024, 9:30:00 AM' 
    }
  ]);

  const [showInput, setShowInput] = useState(false);
  const [newProgress, setNewProgress] = useState({ title: '', summary: '', image: '' });

  const handleAddProgress = () => {
    if (newProgress.title.trim() || newProgress.summary.trim()) {
      const progressEntry = {
        id: Date.now(),
        title: newProgress.title,
        summary: newProgress.summary,
        image: newProgress.image,
        time: new Date().toLocaleString(),
      };
      setProgresses([...progresses, progressEntry]);
      setNewProgress({ title: '', summary: '', image: '' });
      setShowInput(false);
    }
  };

  return (
    <div className="md:col-span-3 space-y-6">
      {/* Tasks Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        <ul className="space-y-2">
          {/* Add tasks here if needed */}
        </ul>
      </div>

      {/* Progress Board Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Progress Board</h2>
        <button 
          onClick={() => setShowInput(!showInput)} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          {showInput ? 'Cancel' : 'Add Progress'}
        </button>

        {showInput && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Progress Title"
              value={newProgress.title}
              onChange={e => setNewProgress({ ...newProgress, title: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <textarea
              placeholder="Progress Summary"
              value={newProgress.summary}
              onChange={e => setNewProgress({ ...newProgress, summary: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              value={newProgress.image}
              onChange={e => setNewProgress({ ...newProgress, image: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button 
              onClick={handleAddProgress}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Submit Progress
            </button>
          </div>
        )}

        {/* Display list of progresses */}
        <div className="space-y-4">
          {progresses.map(progress => (
            <div key={progress.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">{progress.title}</h3>
              <p>{progress.summary}</p>
              {progress.image && <img src={progress.image} alt={progress.title} className="w-32 h-32 object-cover mt-2" />}
              <small className="text-gray-500">{progress.time}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <ul className="space-y-2">
          {/* Add notifications here if needed */}
        </ul>
      </div>
    </div>
  );
};

export default RightColumn;
