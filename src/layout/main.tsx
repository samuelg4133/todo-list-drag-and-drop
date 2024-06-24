import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function MainLayout() {
  return (
    <main className="grid min-h-screen grid-cols-main">
      <Sidebar />
      <section
        className={twMerge(
          "flex-auto py-10 px-6 flex-col justify-start items-center gap-10 inline-flex",
          "transform-cpu transition-all duration-300 ease-in-out"
        )}
      >
        <Outlet />
      </section>
    </main>
  );
}
