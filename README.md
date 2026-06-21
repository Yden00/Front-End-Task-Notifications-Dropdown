# Notifications Dropdown

A small notifications widget built with React and TypeScript: a bell icon with an
unread badge that opens a dropdown with a list of notifications.

## Features

- Bell icon with an unread counter badge
- Dropdown opens on click, closes on outside click or `Escape`
- Two tabs: **All** and **Unread**
- Mark a single notification as read (click it) or **Mark all as read**
- Relative timestamps ("54 minutes ago", "yesterday", ...)
- Avatars generated from the actor's name

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and build
- CSS Modules for styling
- [lucide-react](https://lucide.dev/) for icons
- [DiceBear](https://www.dicebear.com/) for avatars

## Getting started

You need [Node.js](https://nodejs.org/) (version 18 or newer) installed.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   Then open the URL it prints (usually http://localhost:5173).

## Other scripts

```bash
npm run build     # build for production into dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
├── components/
│   ├── NotificationBell.tsx       # bell button + unread badge
│   ├── NotificationsDropdown.tsx  # the dropdown panel
│   ├── TabBar.tsx                 # All / Unread tabs
│   ├── NotificationItem.tsx       # a single notification row
│   └── Avatar.tsx                 # avatar image
├── types.ts                       # notification types
├── data.ts                        # seed notifications
├── renderers.tsx                  # renders text per notification type
├── formatTime.ts                  # relative time helper
├── App.tsx                        # holds state, wires everything together
└── main.tsx                       # app entry point
```

State lives in `App` and is passed down to the components through props, so the bell
(badge) and the dropdown (list) always stay in sync.

## Notes

- Avatars are loaded from the DiceBear API, so an internet connection is needed for
  them to show up.

Thank you for the opportunity, it took about 2-2.5 hours, tell me what you think about it :)
