import { type Notification } from "./types";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const now = Date.now();

export const seedNotifications: Notification[] = [
  {
    id: "1",
    type: "team_join",
    actor: "Carol Jar",
    createdAt: now - 54 * MINUTE,
    read: false,
  },
  {
    id: "2",
    type: "team_join",
    actor: "Simona Winch",
    createdAt: now - 6 * HOUR,
    read: false,
  },
  {
    id: "3",
    type: "review_cancelled",
    actor: "Jim Beam",
    company: "Example Company",
    createdAt: now - 1 * DAY,
    read: true,
  },
  {
    id: "4",
    type: "review_request",
    actor: "Jim Beam",
    company: "Example Company",
    createdAt: now - 1 * DAY,
    read: true,
  },
  {
    id: "5",
    type: "review_request",
    actor: "Peter Pan",
    company: "Example Company 2",
    createdAt: now - 2 * DAY,
    read: true,
  },
];
