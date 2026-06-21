interface BaseNotification {
  id: string;
  actor: string;
  createdAt: number;
  read: boolean;
}

interface TeamJoinNotification extends BaseNotification {
  type: "team_join";
  company?: never;
}

interface ReviewRequestNotification extends BaseNotification {
  type: "review_request";
  company: string;
}

interface ReviewCancelledNotification extends BaseNotification {
  type: "review_cancelled";
  company: string;
}

export type Notification =
  | TeamJoinNotification
  | ReviewRequestNotification
  | ReviewCancelledNotification;

export type NotificationType = Notification["type"];
export type Tab = "all" | "unread";
