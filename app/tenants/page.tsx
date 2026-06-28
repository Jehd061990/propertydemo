"use client";

import { tenants } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

export default function TenantsPage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">Tenants</h1>
      <SectionCard title="Tenant list">
        <div className="overflow-auto">
          <table className="min-w-full text-left">
            <thead className="text-sm text-slate-600">
              <tr>
                <th className="px-4 py-3">Tenant</th>
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Unit</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Payment Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tenants.map((t) => (
                <tr key={t.email} className="border-t">
                  <td className="px-4 py-3 text-sm font-semibold">{t.name}</td>
                  <td className="px-4 py-3 text-sm">{t.property}</td>
                  <td className="px-4 py-3 text-sm">{t.unit}</td>
                  <td className="px-4 py-3 text-sm">{t.phone}</td>
                  <td className="px-4 py-3 text-sm">{t.email}</td>
                  <td className="px-4 py-3 text-sm">{t.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
