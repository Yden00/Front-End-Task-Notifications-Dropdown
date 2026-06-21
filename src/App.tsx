import { useState } from "react";
import { seedNotifications } from "./data";
import { renderNotification } from "./renderers";
import { type Tab } from "./types";

export default function App() {
  const [notifications, setNotifications] = useState(seedNotifications);
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const visibleNotifications =
    activeTab === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  const unreadCount = notifications.filter((n) => !n.read).length;

  function markAllAsRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function markAsRead(id: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  }

  return (
    <div>
      <h1>Notifications ({unreadCount})</h1>
      <div>
        <button onClick={() => setActiveTab("all")}>All Notifications</button>
        <button onClick={() => setActiveTab("unread")}>
          Unread Notifications
        </button>
      </div>
      <button onClick={markAllAsRead}>Mark all as read</button>
      {visibleNotifications.length === 0 ? (
        <p>
          {activeTab === "unread"
            ? "You're all caught up"
            : "No notifications yet"}
        </p>
      ) : (
        <ul>
          {visibleNotifications.map((n) => (
            <li key={n.id} onClick={() => markAsRead(n.id)}>
              {renderNotification(n)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
