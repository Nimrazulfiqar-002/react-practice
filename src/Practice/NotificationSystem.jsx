import React, { useState, useEffect } from 'react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => [...prev, `New notification ${prev.length + 1}`]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Notifications:</h2>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationSystem;
