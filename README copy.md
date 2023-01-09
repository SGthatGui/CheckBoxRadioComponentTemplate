# Input-Component
SG Common component with test case - Input component

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Quickstart](#quickstart)
- [Development](#development)
  - [Requirements](#requirements)
  - [Components](#components)
    - [Styling](#styling)
    - [Code Style](#code-style)
  - [Branch Format](#branch-format)
  - [State Management](#state-management)
  - [Modals](#modals)
  - [Folder Structure](#folder-structure)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quickstart

| Command            | Description                       |
| -----------        | ----------------------------------|
| `npm i`            | Install dependencies              |
| `npm start`        | Start app                         |
| `npm dummy-server` | Start the dummy server (backend)  |

## Development

### Getting up and running

This project uses Node v16. If you use NVM, you can simply do `nvm use` to use the correct node version.

1. Run `npm i`
2. Run `npm start`

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

Tests are written using cypress. Cyrpress is an end to end testing framework that allows us to write integration tests very easily.

1. To run unit tests:
    - Using the cypress interface: `npm run cy:unit`
    - Using the terminal: `npm run cy:unit-cl`
2. To run end to end tests:
    - Using the cypress interface: `npm run cy:e2e`
    - Using the terminal: `npm run cy:e2e-cl`
3. To run all coverage tests `npm run cy:coverage`
    - To see coverage report `npm run cy:report`
    - Edit .nycrc to set report preferences (ex. threshold, file type, reporter), run `nyc --help` for more info
4. To run ESLINT FIX:
    - run the command: `npm run eslint:fix`

### Requirements

- React
- Json Server
- Typescript

### Components

- Use CamelCase for all folder/file names.
- Use dot.notation for file type (test).

```
└── components
    └── ComponentName
        ├── index.ts
        ├── style.scss
        |__ interface.ts
        |__ ComponentName.test.js
```

#### Styling

Style is a mix between Scss and Material UI

#### Code style

Uses prettier.

### Branch format

When creating a branch, we typically use [Ticket number]-[branch name]. So, for example: `304-Homepage`

### State management
The project uses React Query

Within a component,, call the useQuery hook:

```js
import { useQuery } from "react-query";

function App() {
  const info = useQuery("todos", fetchTodoList);
}
```

### Modals

### Folder structure

```
src/
--- assets/ <---- Images and global styles
--- components/ <---- Dummy components
--- config/ <---- User roles configurations
--- interfaces/ <---- Global interfaces
--- views/ <---- Global views
--- services/ <---- Http and CPS services
--- utils/ <---- Random helper and utilities

```