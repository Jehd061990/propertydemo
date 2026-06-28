"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/lib/mock-data";

export function Sidebar() {
  const pathname = usePathname() || "/";

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-slate-100">
      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold">Property Management</h2>
      </div>
      <nav className="px-2 py-4">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item === "Dashboard" ? "" : item.toLowerCase()}`}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors hover:bg-slate-800 ${
                  pathname.startsWith(`/${item.toLowerCase()}`) ||
                  (item === "Dashboard" && pathname === "/")
                    ? "bg-slate-800"
                    : ""
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-slate-600" />
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto px-6 py-6 text-sm text-slate-400">
        Jandoc Software — Demo
      </div>
    </aside>
  );
}
