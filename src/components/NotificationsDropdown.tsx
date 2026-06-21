import { type Notification, type Tab } from "../types";
import { TabBar } from "./TabBar";
import { NotificationItem } from "./NotificationItem";
import styles from "./NotificationsDropdown.module.css";

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
    <div className={styles.dropdown}>
      <div className={styles.header}>
        Notifications
        {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
      </div>
      <div className={styles.toolbar}>
        <TabBar activeTab={activeTab} onTabChange={onTabChange} />
        <button className={styles.markAll} onClick={onMarkAllAsRead}>
          Mark all as read
        </button>
      </div>
      {notifications.length === 0 ? (
        <p className={styles.empty}>
          {activeTab === "unread"
            ? "You're all caught up"
            : "No notifications yet"}
        </p>
      ) : (
        <ul className={styles.list}>
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
