import { StyleKey, Trait } from "@/lib/types";
export function individualReport(traits:Record<Trait,number>,primary:StyleKey,secondary:StyleKey){
  return {
    summary:`You may tend to show a ${primary}-${secondary} blend. People with this pattern often balance multiple communication modes.`,
    strengths:["Translating ideas into action","Adapting communication to context"],
    blindSpots:["Overusing your default style under stress"],
    experience:"Others may experience you as clear and intentional when expectations are explicit.",
    communication:"Use concise expectations, context, and preferred response times.",
    stress:"Under pressure, you may narrow focus and misread tone.",
    growth:"Practice checking assumptions before reacting."
  };
}
