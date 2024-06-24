import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  return (
    <aside className="border-r border-neutral-200 h-full py-6">
      <nav className="flex flex-col items-center gap-5 self-stretch">
        <ul className="flex items-start flex-col gap-4 w-full">
          <li className="w-full self-stretch flex-1 flex">
            <NavLink
              className={({ isActive }) =>
                twMerge(
                  "text-gray-700 hover:text-gray-600 p-1 bg-slate-100 w-full self-stretch",
                  isActive && "bg-cyan-100"
                )
              }
              to={"/create"}
              end
            >
              Criar To Do
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
