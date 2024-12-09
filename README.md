# RBAC Management System

A modern Role-Based Access Control Management System built with React, TypeScript, and Vite. This system provides a comprehensive solution for managing user roles, permissions, and access control in web applications.

## Features

- **User Management**
  - Create, update, and delete users
  - View user details and activity
  - Manage user roles and permissions
  - User profile management

- **Role Management**
  - Define and customize roles
  - Assign permissions to roles
  - Role hierarchy management
  - Role-based access control

- **Dashboard & Analytics**
  - Interactive admin dashboard
  - Visual data representation with charts
  

- **Authentication & Security**
  - Secure login system
  - Protected routes
  - Role-based route protection

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Charts**: React Charts
- **Type Checking**: TypeScript
- **Development Tools**: ESLint, PostCSS

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rbacmSystem.git
cd rbacmSystem
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # React components
│   ├── admin/       # Admin-specific components
│   ├── charts/      # Chart components
│   ├── roles/       # Role management components
│   ├── ui/          # Shadcn UI components
│   └── users/       # User management components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── pages/           # Page components
├── store/           # Zustand store configurations
└── types/           # TypeScript type definitions
```

## Development

### Running Tests
```bash
npm run test
# or
yarn test
```

### Building for Production
```bash
npm run build
# or
yarn build
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Configuration

The application can be configured through various configuration files:

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn UI configuration
