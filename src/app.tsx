import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import { MainLayout } from "./layout/main";
import { queryClient } from "./lib/react-query";
import CreateTodo from "./pages/create-todo";
import TodoDetails from "./pages/todo-details";
import TodoList from "./pages/todo-list";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        element: <TodoList />,
      },
      {
        path: "/:id",
        element: <TodoDetails />,
      },
      {
        path: "/create",
        Component: CreateTodo,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
        }}
      />
    </QueryClientProvider>
  );
}
