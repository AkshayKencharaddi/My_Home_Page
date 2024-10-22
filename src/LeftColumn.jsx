import React, { useState } from 'react';

const LeftColumn = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Team Meeting', date: '10/23/2024', details: 'Discuss the upcoming project roadmap and deliverables.' },
    { id: 2, title: 'Workshop on ReactJS', date: '10/25/2024', details: 'An advanced workshop on React Hooks and State Management.' },
    { id: 3, title: 'Code Review Session', date: '10/27/2024', details: 'Review the codebase for the new dashboard feature.' },
  ]);

  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', description: 'A project to revamp the company website.' },
    { id: 2, name: 'Mobile App Development', description: 'Developing a mobile application for our services.' },
    { id: 3, name: 'Marketing Campaign', description: 'Creating a marketing campaign for product launch.' },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', date: '', details: '' });
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [showEventInput, setShowEventInput] = useState(false);
  const [showProjectInput, setShowProjectInput] = useState(false);

  const handleAddEvent = () => {
    if (newEvent.title.trim() && newEvent.date.trim()) {
      const event = {
        id: Date.now(),
        title: newEvent.title,
        date: newEvent.date,
        details: newEvent.details || 'No details provided.',
      };
      setEvents([...events, event]);
      setNewEvent({ title: '', date: '', details: '' });
      setShowEventInput(false);
    }
  };

  const handleAddProject = () => {
    if (newProject.name.trim()) {
      const project = {
        id: Date.now(),
        name: newProject.name,
        description: newProject.description || 'No description provided.',
      };
      setProjects([...projects, project]);
      setNewProject({ name: '', description: '' });
      setShowProjectInput(false);
    }
  };

  return (
    <div className="md:col-span-3 space-y-8 pl-6">
      {/* Upcoming Events Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
        
        <button 
          onClick={() => setShowEventInput(!showEventInput)} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          {showEventInput ? 'Cancel' : 'Add Event'}
        </button>

        {showEventInput && (
          <div className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <textarea
              placeholder="Event Details"
              value={newEvent.details}
              onChange={e => setNewEvent({ ...newEvent, details: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button 
              onClick={handleAddEvent}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Add Event
            </button>
          </div>
        )}

        {/* Display list of upcoming events */}
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="relative group bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="relative z-10">
                <span className="font-semibold">{event.title}</span>
                <p className="text-gray-500">Date: {event.date}</p>
              </div>
              {/* Event details shown on hover */}
              <div className="absolute z-20 left-0 top-full mt-2 w-64 bg-white p-4 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-semibold">{event.title}</h4>
                <p>{event.details}</p>
                <p className="text-gray-500 text-sm mt-2">Date: {event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        
        <button 
          onClick={() => setShowProjectInput(!showProjectInput)} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          {showProjectInput ? 'Cancel' : 'Add Project'}
        </button>

        {showProjectInput && (
          <div className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Project Name"
              value={newProject.name}
              onChange={e => setNewProject({ ...newProject, name: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={e => setNewProject({ ...newProject, description: e.target.value })}
              className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button 
              onClick={handleAddProject}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Add Project
            </button>
          </div>
        )}

        {/* Display list of projects */}
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="font-semibold">{project.name}</span>
              <p className="text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
