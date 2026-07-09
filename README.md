# OneDAO - Admin Dashboard Frontend Assessment

A premium, modern, and highly responsive admin dashboard application built with **React**, **TypeScript**, and **Vite**. The project features advanced analytics, interactive data tables, authentication interfaces, and full viewport responsiveness.

---

## 🚀 Key Features

* **Interactive Admin Dashboard:** Displays key performance metrics, interactive driver statistics, and rides logs.
* **Reusable UI Component System:**
  * **Generic `<Table>` Component:** A custom, fully generic, ReactTable-inspired table supporting dynamic data binding, custom cell renderers (`render` callback props), and automatic layout styling propagation.
  * **`<Pagination>` Component:** Complete paging logic tied into APIs and client datasets.
  * **`<Toast>` & `<Alert>` Components:** Contextual feedback components for user interactions.
* **Modular Layout System:**
  * **Sidebar Navigation:** Collapsible sidebar panel that collapses into a slide drawer on mobile screens and supports independent scroll containers.
  * **Navbar:** Layout-specific headers featuring user indicators and inline notifications.
* **Premium Data Visualizations:** Dynamic line charts rendering statistics over time using ChartJS and React-Chartjs-2.
* **Full Mobile Responsiveness:** Layout wrapping, scroll grids, and fluid breakpoints.

---

## 🛠️ Tech Stack

* **Frontend Library:** [React 19](https://react.dev/)
* **Build Tool:** [Vite 8](https://vite.dev/)
* **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
* **CSS Framework:** [Bootstrap 5](https://getbootstrap.com/) & Custom CSS Grid Layouts
* **Routing:** [React Router 7](https://reactrouter.com/)
* **Icons:** [FontAwesome React](https://fontawesome.com/)
* **Linter:** [ESLint 9](https://eslint.org/) (Flat Configuration)

---

## 📂 Project Structure

```text
├── public/
│   └── api/                # Mock REST API JSON endpoints (rides, drivers, charts)
├── src/
│   ├── assets/             # Brand logos, landscapes, and images
│   ├── components/
│   │   └── ui/             # Reusable UI library (Table, Toast, Pagination, Input, Button)
│   ├── constants/          # Mock local constants
│   ├── layout/             # Layout wrappers (MainLayout, AuthLayout, Navbar, Sidebar)
│   ├── pages/              # View routes (Dashboard, Login, OTP, Register)
│   ├── routes/             # Client-side router configuration
│   ├── types/              # Global TypeScript models and schema definitions
│   └── utils/              # Client utilities & Axios API clients
├── eslint.config.js        # ESLint flat configuration
├── tsconfig.json           # TS configurations
└── vite.config.ts          # Vite build parameters
```

---

## ⚙️ Getting Started

### 1. Installation
Clone the repository, open the project directory in your terminal, and install the dependencies:
```bash
npm install
```

### 2. Run the Development Server
Launch the local dev environment at [http://localhost:5173](http://localhost:5173):
```bash
npm run dev
```

### 3. Production Build
Generate a compiled bundle inside the `dist/` directory:
```bash
npm run build
```

### 4. Running the Linter
Inspect and lint the files:
```bash
npm run lint
```
