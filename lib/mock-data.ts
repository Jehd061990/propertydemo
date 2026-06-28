export const sidebarItems = [
  "Dashboard",
  "Properties",
  "Units",
  "Tenants",
  "Leases",
  "Maintenance",
  "Payments",
  "Invoices",
  "Reports",
  "Documents",
  "Settings",
];

export const kpis = [
  { label: "Total Properties", value: "128", tone: "sky" },
  { label: "Occupied Units", value: "542", tone: "emerald" },
  { label: "Vacant Units", value: "37", tone: "rose" },
  { label: "Occupancy Rate", value: "93%", tone: "indigo" },
  { label: "Monthly Revenue", value: "$845,000", tone: "cyan" },
  { label: "Outstanding Payments", value: "$42,000", tone: "amber" },
  { label: "Maintenance Requests", value: "18", tone: "violet" },
];

export const properties = [
  {
    slug: "sunrise-residence",
    name: "Sunrise Residences",
    address: "123 Ocean Ave, Miami, FL",
    units: 78,
    occupied: 72,
    vacant: 6,
    revenue: "$128,400",
    status: "Stable",
    image: "/images/property1.jpg",
    location: { lat: 25.7617, lng: -80.1918, country: "United States" },
    details: {
      gallery: [
        "/images/property1.jpg",
        "/images/property2.jpg",
        "/images/property3.jpg",
      ],
      overview: [
        { label: "Total Units", value: "78" },
        { label: "Occupied", value: "72" },
        { label: "Vacant", value: "6" },
        { label: "Monthly Revenue", value: "$128,400" },
      ],
      leaseSummary: [
        { label: "Active leases", value: "65" },
        { label: "Renewals due", value: "9" },
        { label: "Deposit held", value: "$118,000" },
        { label: "Auto renewal", value: "72%" },
      ],
      maintenanceHistory: [
        { date: "Jun 16", event: "Air filter replaced", status: "Completed" },
        { date: "Jun 12", event: "Pool pump service", status: "Completed" },
        { date: "Jun 08", event: "Roof inspection", status: "Scheduled" },
      ],
      documents: [
        "Lease Agreement.pdf",
        "Inspection Report.pdf",
        "Insurance Certificate.pdf",
        "Maintenance Record.pdf",
      ],
      tenants: [
        { name: "John Carter", unit: "101", status: "Current" },
        { name: "Sophia Lee", unit: "110", status: "Current" },
        { name: "Mia Gomez", unit: "212", status: "Pending" },
        { name: "Lucas Ford", unit: "305", status: "Current" },
      ],
      analytics: {
        revenueTrend: [
          { month: "Jan", value: 110000 },
          { month: "Feb", value: 117000 },
          { month: "Mar", value: 123000 },
          { month: "Apr", value: 126500 },
          { month: "May", value: 130000 },
          { month: "Jun", value: 128400 },
        ],
        expenseTrend: [
          { month: "Jan", value: 27000 },
          { month: "Feb", value: 29000 },
          { month: "Mar", value: 31000 },
          { month: "Apr", value: 30500 },
          { month: "May", value: 33000 },
          { month: "Jun", value: 32500 },
        ],
      },
    },
  },
  {
    slug: "greenview-apartments",
    name: "Greenview Apartments",
    address: "45 Green St, Sydney, NSW",
    units: 64,
    occupied: 60,
    vacant: 4,
    revenue: "$94,200",
    status: "Growing",
    image: "/images/property2.jpg",
    location: { lat: -33.8688, lng: 151.2093, country: "Australia" },
  },
  {
    slug: "metro-business-center",
    name: "Metro Business Center",
    address: "200 Market Rd, Manila",
    units: 120,
    occupied: 110,
    vacant: 10,
    revenue: "$215,000",
    status: "High Demand",
    image: "/images/property3.jpg",
    location: { lat: 14.5995, lng: 120.9842, country: "Philippines" },
  },
  {
    slug: "north-park-villas",
    name: "North Park Villas",
    address: "12 Park Ln, Denver, CO",
    units: 40,
    occupied: 37,
    vacant: 3,
    revenue: "$62,300",
    status: "Stable",
    image: "/images/property4.jpg",
    location: { lat: 39.7392, lng: -104.9903, country: "United States" },
  },
  {
    slug: "ocean-heights",
    name: "Ocean Heights",
    address: "78 Seaside Blvd, Honolulu, HI",
    units: 36,
    occupied: 34,
    vacant: 2,
    revenue: "$46,100",
    status: "Coastal",
    image: "/images/property5.jpg",
    location: { lat: 21.3069, lng: -157.8583, country: "United States" },
  },
];

export const units = Array.from({ length: 60 }).map((_, i) => ({
  id: `U-${100 + i}`,
  unitNumber: `${100 + i}`,
  property:
    i % 3 === 0
      ? "Sunrise Residences"
      : i % 3 === 1
        ? "Greenview Apartments"
        : "Metro Business Center",
  tenant:
    i % 4 === 0
      ? "John Carter"
      : i % 4 === 1
        ? "Emma Wilson"
        : i % 4 === 2
          ? "Michael Smith"
          : "Sophia Lee",
  rent: `$${(900 + (i % 8) * 50).toFixed(0)}`,
  leaseEnd: `2026-0${(i % 9) + 1}-15`,
  status: i % 7 === 0 ? "Vacant" : "Occupied",
}));

export const tenants = [
  {
    name: "John Carter",
    phone: "+1 (305) 555-0147",
    email: "john.carter@example.com",
    property: "Sunrise Residences",
    unit: "101",
    paymentStatus: "Current",
    leaseStatus: "Active",
  },
  {
    name: "Emma Wilson",
    phone: "+61 2 5551 0148",
    email: "emma.wilson@example.com",
    property: "Greenview Apartments",
    unit: "202",
    paymentStatus: "Late",
    leaseStatus: "Active",
  },
  {
    name: "Michael Smith",
    phone: "+63 2 5551 0149",
    email: "michael.smith@example.com",
    property: "Metro Business Center",
    unit: "303",
    paymentStatus: "Pending",
    leaseStatus: "Active",
  },
  {
    name: "Sarah Johnson",
    phone: "+1 (720) 555-0150",
    email: "sarah.johnson@example.com",
    property: "North Park Villas",
    unit: "12A",
    paymentStatus: "Current",
    leaseStatus: "Expiring",
  },
  {
    name: "Daniel Brown",
    phone: "+1 (808) 555-0151",
    email: "daniel.brown@example.com",
    property: "Ocean Heights",
    unit: "5B",
    paymentStatus: "Current",
    leaseStatus: "Active",
  },
  {
    name: "Sophia Lee",
    phone: "+1 (305) 555-0152",
    email: "sophia.lee@example.com",
    property: "Sunrise Residences",
    unit: "110",
    paymentStatus: "Current",
    leaseStatus: "Active",
  },
];

export const maintenance = [
  {
    id: "M-1001",
    title: "Leaking Faucet",
    property: "Sunrise Residences",
    unit: "210",
    tech: "Carlos Rivera",
    priority: "High",
    eta: "2 days",
    status: "New",
  },
  {
    id: "M-1002",
    title: "Broken Air Conditioner",
    property: "Greenview Apartments",
    unit: "302",
    tech: "Ava Patel",
    priority: "High",
    eta: "3 days",
    status: "Assigned",
  },
  {
    id: "M-1003",
    title: "Painting",
    property: "Metro Business Center",
    unit: "12",
    tech: "Liam Zhang",
    priority: "Low",
    eta: "7 days",
    status: "In Progress",
  },
  {
    id: "M-1004",
    title: "Electrical Repair",
    property: "North Park Villas",
    unit: "4B",
    tech: "Mia Gomez",
    priority: "Medium",
    eta: "5 days",
    status: "Completed",
  },
];

export const payments = [
  {
    invoice: "INV-2201",
    tenant: "John Carter",
    property: "Sunrise Residences",
    amount: "$1,200",
    due: "2026-06-01",
    paid: "2026-06-02",
    status: "Paid",
    method: "Card",
  },
  {
    invoice: "INV-2202",
    tenant: "Emma Wilson",
    property: "Greenview Apartments",
    amount: "$1,350",
    due: "2026-06-05",
    paid: null,
    status: "Late",
    method: "Bank",
  },
  {
    invoice: "INV-2203",
    tenant: "Michael Smith",
    property: "Metro Business Center",
    amount: "$1,100",
    due: "2026-06-10",
    paid: null,
    status: "Pending",
    method: "Card",
  },
];

export const recentActivity = [
  { time: "08:45", event: "New tenant registered: BluePeak Construction" },
  { time: "09:20", event: "Invoice INV-2201 paid" },
  { time: "10:05", event: "Lead converted: Metro Retail" },
  { time: "11:12", event: "Maintenance completed: Electrical Repair" },
];

export const charts = {
  revenueTrend: [
    { date: "Jan", revenue: 520000 },
    { date: "Feb", revenue: 610000 },
    { date: "Mar", revenue: 700000 },
    { date: "Apr", revenue: 730000 },
    { date: "May", revenue: 810000 },
    { date: "Jun", revenue: 845000 },
  ],
  occupancyTrend: [
    { date: "Jan", occupancy: 89 },
    { date: "Feb", occupancy: 90 },
    { date: "Mar", occupancy: 91 },
    { date: "Apr", occupancy: 92 },
    { date: "May", occupancy: 92 },
    { date: "Jun", occupancy: 93 },
  ],
};
