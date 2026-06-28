"use client";

import { SectionCard } from "@/components/ui/section-card";

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">Reports</h1>
      <SectionCard title="Financial reports">
        <p className="text-sm text-slate-600">
          Revenue, expenses, occupancy and collection metrics can be explored
          here.
        </p>
      </SectionCard>
    </div>
  );
}
