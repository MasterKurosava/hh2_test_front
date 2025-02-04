import React from "react";

interface NotificationListProps {
  notifications: string[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2">
      {notifications.slice(-2).map((message, index) => (
        <div key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
          {message}
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
