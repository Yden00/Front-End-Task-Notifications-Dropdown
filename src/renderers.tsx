import type { ReactNode } from "react";
import { type Notification, type NotificationType } from "./types";

type Renderer<T extends NotificationType> = (
  n: Extract<Notification, { type: T }>,
) => ReactNode;

export function renderNotification(n: Notification): ReactNode {
  const renderer = renderers[n.type] as Renderer<typeof n.type>;
  return renderer(n);
}

export const renderers: { [T in NotificationType]: Renderer<T> } = {
  team_join: (n) => (
    <>
      <strong>{n.actor}</strong> joined your team.
    </>
  ),
  review_request: (n) => (
    <>
      <strong>{n.actor}</strong> from <strong>{n.company}</strong> has requested
      a review
    </>
  ),
  review_cancelled: (n) => (
    <>
      <strong>{n.actor}</strong> has cancelled their review request from{" "}
      <strong>{n.company}</strong>
    </>
  ),
};
