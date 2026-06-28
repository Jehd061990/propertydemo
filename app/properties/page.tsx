"use client";

import Link from "next/link";
import { SectionCard } from "@/components/ui/section-card";
import { PropertyCard } from "@/components/ui/property-card";
import { properties } from "@/lib/mock-data";

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Properties</h1>
          <p className="text-sm text-slate-600">
            All properties in your portfolio
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <Link key={p.slug} href={`/property/${p.slug}`}>
            {/* <a>
              <PropertyCard property={p} />
            </a> */}
            <PropertyCard property={p} />
          </Link>
        ))}
      </div>
    </div>
  );
}
