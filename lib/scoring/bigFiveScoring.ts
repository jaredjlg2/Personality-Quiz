import { questionnaireItems } from "@/lib/questionnaire/items";
import { Trait } from "@/lib/types";
const traits: Trait[]=["openness","conscientiousness","extraversion","agreeableness","neuroticism"];
export function scoreBigFive(answers: Record<string, number>) {
  const raw = Object.fromEntries(traits.map(t=>[t,0])) as Record<Trait,number>;
  const counts = Object.fromEntries(traits.map(t=>[t,0])) as Record<Trait,number>;
  for (const item of questionnaireItems){const ans=answers[item.id]??3; const scored=item.reverseScored?6-ans:ans; raw[item.trait]+=scored; counts[item.trait]++;}
  const normalized = Object.fromEntries(traits.map(t=>{const min=counts[t],max=counts[t]*5; return [t,Math.round(((raw[t]-min)/(max-min))*100)];})) as Record<Trait,number>;
  return {raw,normalized};
}
