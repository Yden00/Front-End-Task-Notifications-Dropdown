import { useState, useRef, useEffect } from "react";
import { seedNotifications } from "./data";
import { NotificationsDropdown } from "./components/NotificationsDropdown";
import { type Tab } from "./types";

export default function App() {
  const [notifications, setNotifications] = useState(seedNotifications);
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        🔔 {unreadCount > 0 && <span>({unreadCount})</span>}
      </button>
      {isOpen && (
        <NotificationsDropdown
          notifications={visibleNotifications}
          unreadCount={unreadCount}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onMarkAsRead={markAsRead}
          onMarkAllAsRead={markAllAsRead}
        />
      )}
    </div>
  );
}
