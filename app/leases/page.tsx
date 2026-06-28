"use client";

import { SectionCard } from "@/components/ui/section-card";

export default function LeasesPage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">Leases</h1>
      <SectionCard title="Lease overview">
        <p className="text-sm text-slate-600">
          Lease cards and quick actions will appear here in the demo.
        </p>
      </SectionCard>
    </div>
  );
}
