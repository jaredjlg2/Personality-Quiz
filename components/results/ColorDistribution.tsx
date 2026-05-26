import { StyleKey } from "@/lib/types";
export function ColorDistribution({scores}:{scores:Record<StyleKey,number>}){return <div className="grid grid-cols-2 gap-2">{Object.entries(scores).map(([k,v])=><div key={k} className="bg-white p-3 rounded border"><div className="capitalize">{k}</div><div>{v}</div></div>)}</div>}
