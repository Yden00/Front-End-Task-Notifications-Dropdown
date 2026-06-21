import { type Tab } from "../types";
import styles from "./TabBar.module.css";

interface TabBarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className={styles.tabs}>
      <button
        className={activeTab === "all" ? `${styles.tab} ${styles.active}` : styles.tab}
        aria-pressed={activeTab === "all"}
        onClick={() => onTabChange("all")}
      >
        All Notifications
      </button>
      <button
        className={activeTab === "unread" ? `${styles.tab} ${styles.active}` : styles.tab}
        aria-pressed={activeTab === "unread"}
        onClick={() => onTabChange("unread")}
      >
        Unread Notifications
      </button>
    </div>
  );
}
