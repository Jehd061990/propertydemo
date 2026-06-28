"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { MetricCard } from "@/components/ui/metric-card";
import { SectionCard } from "@/components/ui/section-card";
import { PropertyCard } from "@/components/ui/property-card";
import { kpis, properties, charts } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-600">
          Overview of your property portfolio and operations
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <MetricCard key={k.label} label={k.label} value={k.value} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Revenue Trend" subtitle="Last 6 months">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={charts.revenueTrend}
                margin={{ top: 6, right: 12, left: 0, bottom: 6 }}
              >
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#475569" />
                <YAxis
                  stroke="#475569"
                  tickFormatter={(v) => `$${v / 1000}k`}
                />
                <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
                <Tooltip
                  formatter={(value) => {
                    const n =
                      typeof value === "number" ? value : Number(value ?? 0);
                    return [`$${n.toLocaleString()}`, "Revenue"];
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  fill="url(#g1)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Occupancy" subtitle="Trend">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={charts.occupancyTrend}
                margin={{ top: 6, right: 12, left: 0, bottom: 6 }}
              >
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#475569" />
                <YAxis stroke="#475569" />
                <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
                <Tooltip
                  formatter={(value) => {
                    const n =
                      typeof value === "number" ? value : Number(value ?? 0);
                    return [`${n}%`, "Occupancy"];
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="occupancy"
                  stroke="#10b981"
                  fill="url(#g2)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Properties" subtitle="Portfolio snapshot">
          <div className="space-y-3">
            {properties.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
