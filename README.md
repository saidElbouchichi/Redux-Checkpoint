# Redux Checkpoint — GOMYCODE

Application ToDo dont l'état global est géré avec **Redux** (`redux` + `react-redux`).

## Structure

- `src/redux/` — `actionTypes`, `actions` (créateurs d'actions), `reducer` (pur), `store`.
- `AddTask` — ajoute une nouvelle tâche (`dispatch(addTask)`).
- `ListTask` — affiche les tâches et les **filtre** (toutes / faites / pas faites) via `useSelector`.
- `Task` — coche/décoche une tâche et permet de la **modifier**.

Chaque tâche : `{ id, description, isDone }`.

```bash
npm install
npm start
```
