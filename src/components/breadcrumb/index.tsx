import { ComponentProps } from "react";

import { HomeIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export interface BreadcrumbLinkProps {
  to: string;
  value: string;
}

type BreadcrumbProps = ComponentProps<"ul"> & {
  items: BreadcrumbLinkProps[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center gap-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="size-5" />
            </Link>
          </div>
        </li>
        {items.map((item) => (
          <li key={item.to}>
            <div className="flex items-center gap-4">
              <svg
                className="size-5 shrink-0 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  twMerge(
                    "text-sm font-medium text-gray-500 hover:text-gray-700",
                    isActive && "font-semibold text-gray-600"
                  )
                }
                end
              >
                {item.value}
              </NavLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
