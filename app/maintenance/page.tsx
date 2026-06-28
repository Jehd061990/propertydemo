"use client";

import { SectionCard } from "@/components/ui/section-card";
import { maintenance } from "@/lib/mock-data";

export default function MaintenancePage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">
        Maintenance
      </h1>
      <SectionCard title="Kanban" subtitle="Requests by stage">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["New", "Assigned", "In Progress", "Completed"].map((stage) => (
            <div
              key={stage}
              className="rounded-lg border border-slate-200 bg-slate-50 p-3"
            >
              <h4 className="text-sm font-semibold text-slate-800">{stage}</h4>
              <div className="mt-3 space-y-2">
                {maintenance
                  .filter((m) => m.status === stage)
                  .map((m) => (
                    <div
                      key={m.id}
                      className="rounded-md bg-white p-3 shadow-sm"
                    >
                      <div className="text-sm font-semibold">{m.title}</div>
                      <div className="text-xs text-slate-500">
                        {m.property} • {m.unit}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
