import { type Notification } from "../types";
import { renderNotification } from "../renderers";
import { formatTimeAgo } from "../formatTime";
import styles from "./NotificationItem.module.css";

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

export function NotificationItem({
  notification,
  onMarkAsRead,
}: NotificationItemProps) {
  const itemClass = notification.read
    ? styles.item
    : `${styles.item} ${styles.unread}`;

  return (
    <li className={itemClass} onClick={() => onMarkAsRead(notification.id)}>
      <div className={styles.content}>
        <div className={styles.text}>{renderNotification(notification)}</div>
        <div className={styles.time}>
          {formatTimeAgo(notification.createdAt)}
        </div>
      </div>
      {!notification.read && <div className={styles.dot} />}
    </li>
  );
}
