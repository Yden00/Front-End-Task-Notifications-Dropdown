import { type Notification } from "../types";
import { renderNotification } from "../renderers";
import { formatTimeAgo } from "../formatTime";

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

export function NotificationItem({
  notification,
  onMarkAsRead,
}: NotificationItemProps) {
  return (
    <li onClick={() => onMarkAsRead(notification.id)}>
      <div>{renderNotification(notification)}</div>
      <div>{formatTimeAgo(notification.createdAt)}</div>
    </li>
  );
}
