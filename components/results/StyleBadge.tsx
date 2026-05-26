import { styleMeta } from "@/lib/scoring/styleMapping";
import { StyleKey } from "@/lib/types";
export function StyleBadge({style}:{style:StyleKey}){const m=styleMeta[style];return <span className={`px-3 py-1 rounded-full bg-white border ${m.color}`}>{m.label}</span>}
