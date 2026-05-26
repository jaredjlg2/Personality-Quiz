import { pairReport } from "@/lib/reports/pairReport";
export default function Pair(){const r=pairReport('Ava','Ben'); return <main className="space-y-2"><h1 className="text-2xl font-bold">Pair Comparison</h1><p>{r.understand}</p><p>{r.friction}</p><p>{r.aToB}</p><p>{r.bToA}</p><p>{r.loop}</p><p>{r.repair}</p><p>{r.mode}</p></main>}
