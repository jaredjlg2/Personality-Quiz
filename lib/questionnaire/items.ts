import { QuestionnaireItem, Trait } from "@/lib/types";
// IMPORTANT: This questionnaire should use public-domain IPIP-style Big Five items.
// The initial questionnaire is based on public-domain Big Five/IPIP format, not proprietary tests.
const prompts: Record<Trait, {a:string;b:string}[]> = {
  openness:[{a:"I enjoy exploring new ideas.",b:"I avoid abstract topics."},{a:"I appreciate art and beauty.",b:"I rarely notice artistic details."},{a:"I like trying new approaches.",b:"I prefer familiar routines."},{a:"I am curious about many subjects.",b:"I am uninterested in learning outside my needs."},{a:"I imagine possibilities easily.",b:"I focus only on practical facts."}],
  conscientiousness:[{a:"I stay organized in my work.",b:"I leave tasks unfinished."},{a:"I plan ahead.",b:"I act without preparation."},{a:"I follow through on commitments.",b:"I forget obligations."},{a:"I pay attention to details.",b:"I overlook important details."},{a:"I manage time carefully.",b:"I procrastinate often."}],
  extraversion:[{a:"I feel energized around people.",b:"I prefer to stay in the background."},{a:"I speak up in groups.",b:"I avoid group discussions."},{a:"I start conversations easily.",b:"I wait for others to approach me."},{a:"I enjoy being socially active.",b:"I limit social interaction."},{a:"I am expressive in communication.",b:"I keep my thoughts to myself."}],
  agreeableness:[{a:"I try to understand others' feelings.",b:"I am blunt even when it hurts."},{a:"I cooperate to keep harmony.",b:"I push my view regardless of others."},{a:"I am patient with different perspectives.",b:"I get irritated by disagreement."},{a:"I look for win-win outcomes.",b:"I treat compromise as weakness."},{a:"I am considerate in feedback.",b:"I can be harsh in feedback."}],
  neuroticism:[{a:"I worry about mistakes.",b:"I stay calm under pressure."},{a:"My mood changes quickly.",b:"I remain emotionally steady."},{a:"I feel stressed easily.",b:"I recover quickly from stress."},{a:"I overthink uncertain situations.",b:"I am relaxed with uncertainty."},{a:"I take criticism personally.",b:"I take criticism constructively."}],
};
export const questionnaireItems: QuestionnaireItem[] = Object.entries(prompts).flatMap(([trait,pairs],i)=>pairs.flatMap((p,j)=>[
{id:`${trait}-${j+1}a`,text:p.a,trait:trait as Trait,reverseScored:false},
{id:`${trait}-${j+1}b`,text:p.b,trait:trait as Trait,reverseScored:true},
])).slice(0,50);
