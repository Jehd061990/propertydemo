"use client";

import { useParams } from "next/navigation";
import { SectionCard } from "@/components/ui/section-card";
import { StatusPill } from "@/components/ui/status-pill";
import { properties } from "@/lib/mock-data";
import { PropertyCard } from "@/components/ui/property-card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function PropertyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const property = properties.find((p) => p.slug === slug);

  if (!property) return <div className="p-6">Property not found</div>;

  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Property Overview
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            {property.name}
          </h1>
          <p className="text-sm text-slate-600">{property.address}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <StatusPill label={property.status} variant="success" />
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
            Export report
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {property.details.overview.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>

          <SectionCard title="Lease summary" subtitle="Snapshot of active contract health">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {property.details.leaseSummary.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Revenue & expenses" subtitle="Monthly performance">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={property.details.analytics.revenueTrend}
                  margin={{ top: 16, right: 24, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.75} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#475569" />
                  <YAxis stroke="#475569" tickFormatter={(value) => `$${value / 1000}k`} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <Tooltip
                    formatter={(value) => {
                      const n = typeof value === "number" ? value : Number(value ?? 0);
                      return [`$${n.toLocaleString()}`, "Amount"];
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#2563eb" fill="url(#revGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard title="Maintenance history" subtitle="Recent property work orders">
            <div className="space-y-3">
              {property.details.maintenanceHistory.map((item) => (
                <div key={item.date} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{item.event}</p>
                      <p className="text-sm text-slate-500">{item.date}</p>
                    </div>
                    <StatusPill
                      label={item.status}
                      variant={item.status === "Completed" ? "success" : item.status === "Scheduled" ? "warning" : "neutral"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard title="Gallery" subtitle="Property snapshots">
            <div className="grid gap-3">
              {property.details.gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded-3xl bg-slate-100">
                  <img src={src} alt={property.name} className="h-40 w-full object-cover" />
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Documents" subtitle="Latest property files">
            <ul className="space-y-3 text-sm text-slate-700">
              {property.details.documents.map((doc) => (
                <li key={doc} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span>{doc}</span>
                  <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white hover:bg-slate-800">
                    Download
                  </button>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Tenant list" subtitle="Selected leases">
            <div className="space-y-3">
              {property.details.tenants.map((tenant) => (
                <div key={tenant.name} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{tenant.name}</p>
                      <p className="text-sm text-slate-500">Unit {tenant.unit}</p>
                    </div>
                    <StatusPill
                      label={tenant.status}
                      variant={tenant.status === "Current" ? "success" : "warning"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
