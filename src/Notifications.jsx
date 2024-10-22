import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: "A liked your post", time: "10 minutes ago" },
    { id: 2, message: "B commented on your photo", time: "20 minutes ago" },
    { id: 3, message: "D followed you", time: "1 hour ago" },
    { id: 4, message: "F sent you a message", time: "2 hours ago" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <div className="bg-white shadow-lg rounded-lg p-4 space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className="p-4 border-b last:border-b-0">
            <p>{notification.message}</p>
            <span className="text-gray-500 text-sm">{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
