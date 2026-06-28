"use client";

import Image from "next/image";
import { StatusPill } from "./status-pill";

export function PropertyCard({ property }: { property: any }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
          {property.image ? (
            <Image
              src={property.image}
              alt={property.name}
              width={160}
              height={120}
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-slate-200" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-slate-900">
            {property.name}
          </h4>
          <p className="text-sm text-slate-600">{property.address}</p>
          <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
            <div>{property.units} units</div>
            <div>•</div>
            <div>{property.occupied} occupied</div>
            <div>•</div>
            <div>{property.vacant} vacant</div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="text-sm text-slate-600">{property.revenue}</div>
          <StatusPill
            label={property.status}
            variant={property.status === "High Demand" ? "success" : "neutral"}
          />
        </div>
      </div>
    </article>
  );
}
