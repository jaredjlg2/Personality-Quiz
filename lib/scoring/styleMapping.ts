import { StyleKey, Trait } from "@/lib/types";
export const styleConfig={
  driver:{extraversion:0.25,conscientiousness:0.30,agreeableness:-0.25,neuroticism:-0.20},
  explorer:{extraversion:0.40,openness:0.40,conscientiousness:-0.10,agreeableness:0.10},
  stabilizer:{agreeableness:0.40,neuroticism:-0.30,conscientiousness:0.15,extraversion:-0.15},
  architect:{conscientiousness:0.40,openness:0.20,extraversion:-0.20,neuroticism:-0.20},
} as const;
const traits: Trait[]=["openness","conscientiousness","extraversion","agreeableness","neuroticism"];
export function mapStyles(scores: Record<Trait,number>){
  const result={} as Record<StyleKey,number>;
  (Object.keys(styleConfig) as StyleKey[]).forEach(style=>{let total=0; for(const t of traits){const w=(styleConfig[style] as any)[t]??0; total += (w>=0?scores[t]:(100-scores[t]))*Math.abs(w);} result[style]=Math.round(total);});
  const sorted=(Object.entries(result) as [StyleKey,number][]).sort((a,b)=>b[1]-a[1]);
  return {styleScores:result,primaryStyle:sorted[0][0],secondaryStyle:sorted[1][0]};
}
export const styleMeta={driver:{label:"Driver",color:"text-red-600"},explorer:{label:"Explorer",color:"text-yellow-600"},stabilizer:{label:"Stabilizer",color:"text-green-600"},architect:{label:"Architect",color:"text-blue-600"}};
