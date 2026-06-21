import { type Notification, type Tab } from "../types";
import { TabBar } from "./TabBar";
import { NotificationItem } from "./NotificationItem";

interface NotificationsDropdownProps {
  notifications: Notification[];
  unreadCount: number;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

export function NotificationsDropdown({
  notifications,
  unreadCount,
  activeTab,
  onTabChange,
  onMarkAsRead,
  onMarkAllAsRead,
}: NotificationsDropdownProps) {
  return (
    <div>
      <h1>Notifications ({unreadCount})</h1>
      <TabBar activeTab={activeTab} onTabChange={onTabChange} />
      <button onClick={onMarkAllAsRead}>Mark all as read</button>
      {notifications.length === 0 ? (
        <p>
          {activeTab === "unread"
            ? "You're all caught up"
            : "No notifications yet"}
        </p>
      ) : (
        <ul>
          {notifications.map((n) => (
            <NotificationItem
              key={n.id}
              notification={n}
              onMarkAsRead={onMarkAsRead}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
