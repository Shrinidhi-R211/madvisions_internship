# Task Maintainer

A simple, interactive and responsive task management application built with React. Task Maintainer helps users organise their daily activities, track task progress, and manage tasks through a clean and intuitive interface.

## ✨ Features

### Task Management

- Add new tasks.
- Edit existing task titles.
- Delete tasks with a confirmation modal.
- Mark tasks as completed or pending.
- Save task status changes.

### Task Filtering

- View all tasks.
- Filter completed tasks.
- Filter pending tasks.
- Switch between filters without losing task information.

### Task Overview

- View the total number of tasks.
- Track completed tasks.
- Track pending tasks.
- Click overview cards to filter tasks.

### User Interface

- Light and dark themes.
- Responsive layout.
- Fixed header with a glassmorphism effect.
- Interactive overview cards.
- Confirmation and editing modals.
- Keyboard accessibility for modal interactions.

### Data Persistence

- Uses browser LocalStorage to save tasks.
- Remembers the selected theme.
- Preserves task information after refreshing or reopening the application.

## 🛠️ Technologies Used

- **React** – Building reusable UI components.
- **JavaScript (ES6+)** – Application logic and interactivity.
- **CSS3** – Styling, layouts, animations and responsive design.
- **Vite** – Development server and build tool.
- **LocalStorage** – Client-side data persistence.

## 📁 Project Structure

```text
to-do-list/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   ├── DeleteConfirmModal.jsx
│   │   ├── EditTaskModal.jsx
│   │   └── OverviewCard.jsx
│   │
│   ├── styles/
│   │   ├── Header.css
│   │   ├── TodoForm.css
│   │   ├── TodoList.css
│   │   ├── TodoItem.css
│   │   ├── DeleteConfirmModal.css
│   │   ├── EditTaskModal.css
│   │   └── OverviewCard.css
│   │    
│   │── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js installed.
- npm installed.

### Installation

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate into the project directory:

```bash
cd to-do-list
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in your terminal.

### Production Build

To generate an optimised production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 💾 Data Storage

Task Maintainer currently uses LocalStorage instead of a backend database.

This means:

- Tasks are saved within the browser.
- Theme preferences are saved within the browser.
- Data is specific to the browser and website origin.
- Data does not automatically synchronise between different devices.

## 🔮 Future Improvements

- Progressive Web App (PWA) support.
- Database integration.
- Cloud-based task synchronisation.

## 📌 Deployment

The application is intended to be deployed using **Vercel**.

The live application URL will be added here after deployment.

## 👨‍💻 Author

Developed as a personal React learning and project-building experience.
