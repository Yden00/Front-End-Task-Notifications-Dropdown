import { Bell } from "lucide-react";
import styles from "./NotificationBell.module.css";

interface NotificationBellProps {
  unreadCount: number;
  onClick: () => void;
}

export function NotificationBell({
  unreadCount,
  onClick,
}: NotificationBellProps) {
  return (
    <button
      className={styles.bell}
      onClick={onClick}
      aria-label={`Notifications, ${unreadCount} unread`}
    >
      <Bell size={22} strokeWidth={2} />
      {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
    </button>
  );
}
