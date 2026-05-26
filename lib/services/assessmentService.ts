import { Assessment } from "@/lib/types";
const key='tpm_assessments';
export const assessmentService={all():Assessment[]{if(typeof window==='undefined') return []; return JSON.parse(localStorage.getItem(key)||'[]');},save(a:Assessment){const all=this.all(); all.push(a); localStorage.setItem(key,JSON.stringify(all));},get(id:string){return this.all().find(a=>a.id===id);}};
