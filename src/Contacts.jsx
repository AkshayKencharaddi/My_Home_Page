import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
    { id: 6, name: 'F' },
    { id: 7, name: 'G' },
    { id: 8, name: 'H' },
    { id: 9, name: 'I' },
    { id: 10, name: 'J' },
  ]);

  const [newContact, setNewContact] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handle adding a new contact
  const handleAddContact = () => {
    if (newContact.trim()) {
      const contact = {
        id: contacts.length + 1,
        name: newContact.trim(),
      };
      setContacts([...contacts, contact]);
      setNewContact('');
    }
  };

  // Handle contact search and redirect
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/contacts/${searchQuery}`);
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Search and Add Contact Form */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Contacts"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            Search
          </button>
        </form>

        {/* Add Contact Form */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add New Contact"
            value={newContact}
            onChange={e => setNewContact(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleAddContact} className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2">
            Add
          </button>
        </div>
      </div>

      {/* Contacts List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Contacts</h2>
        <ul className="space-y-4">
          {contacts.map(contact => (
            <li
              key={contact.id}
              className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
              onClick={() => navigate(`/contacts/${contact.name}`)}
            >
              {contact.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
