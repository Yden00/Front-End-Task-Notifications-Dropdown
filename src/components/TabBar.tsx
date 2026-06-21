import { type Tab } from "../types";

interface TabBarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div>
      <button
        aria-pressed={activeTab === "all"}
        onClick={() => onTabChange("all")}
      >
        All Notifications
      </button>
      <button
        aria-pressed={activeTab === "unread"}
        onClick={() => onTabChange("unread")}
      >
        Unread Notifications
      </button>
    </div>
  );
}
