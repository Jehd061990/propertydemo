"use client";

import { Bell, Search, Calendar, ChevronDown, BellRing } from "lucide-react";

export function TopNav() {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2 sm:w-[360px]">
          <Search size={16} className="text-slate-500" />
          <input
            type="search"
            placeholder="Search properties, units, tenants"
            className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50">
            <span>Sunrise Residences</span>
            <ChevronDown size={16} />
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50">
            <Calendar size={16} />
            <span>Jun 2026</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-sm hover:bg-slate-200">
          <BellRing size={18} />
          <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
            5
          </span>
        </button>
        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2">
          <img src="/images/avatar.jpg" alt="avatar" className="h-10 w-10 rounded-full" />
          <div className="hidden sm:block text-sm">
            <div className="font-semibold text-slate-900">Alex Morgan</div>
            <div className="text-slate-500">Owner</div>
          </div>
        </div>
      </div>
    </header>
  );
}
