"use client";

import { SectionCard } from "@/components/ui/section-card";
import { units } from "@/lib/mock-data";

export default function UnitsPage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">Units</h1>
      <SectionCard title="Units table">
        <div className="overflow-auto">
          <table className="min-w-full text-left">
            <thead className="text-sm text-slate-600">
              <tr>
                <th className="px-4 py-3">Unit</th>
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Tenant</th>
                <th className="px-4 py-3">Rent</th>
                <th className="px-4 py-3">Lease End</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {units.slice(0, 50).map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="px-4 py-3 text-sm font-semibold">
                    {u.unitNumber}
                  </td>
                  <td className="px-4 py-3 text-sm">{u.property}</td>
                  <td className="px-4 py-3 text-sm">{u.tenant}</td>
                  <td className="px-4 py-3 text-sm">{u.rent}</td>
                  <td className="px-4 py-3 text-sm">{u.leaseEnd}</td>
                  <td className="px-4 py-3 text-sm">{u.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
