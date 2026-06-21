interface NotificationBellProps {
  unreadCount: number;
  onClick: () => void;
}

export function NotificationBell({
  unreadCount,
  onClick,
}: NotificationBellProps) {
  return (
    <button onClick={onClick} aria-label={`Notifications, ${unreadCount} unread`}>
      🔔 {unreadCount > 0 && <span>({unreadCount})</span>}
    </button>
  );
}
