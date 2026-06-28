"use client";

import { SectionCard } from "@/components/ui/section-card";
import { payments } from "@/lib/mock-data";

export default function PaymentsPage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">Payments</h1>
      <SectionCard title="Recent payments">
        <div className="overflow-auto">
          <table className="min-w-full text-left">
            <thead className="text-sm text-slate-600">
              <tr>
                <th className="px-4 py-3">Invoice</th>
                <th className="px-4 py-3">Tenant</th>
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Due</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {payments.map((p) => (
                <tr key={p.invoice} className="border-t">
                  <td className="px-4 py-3 text-sm font-semibold">
                    {p.invoice}
                  </td>
                  <td className="px-4 py-3 text-sm">{p.tenant}</td>
                  <td className="px-4 py-3 text-sm">{p.property}</td>
                  <td className="px-4 py-3 text-sm">{p.amount}</td>
                  <td className="px-4 py-3 text-sm">{p.due}</td>
                  <td className="px-4 py-3 text-sm">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
