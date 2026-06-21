import { type Notification } from "../types";
import { renderNotification } from "../renderers";

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
      {renderNotification(notification)}
    </li>
  );
}
