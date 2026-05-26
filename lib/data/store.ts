import { Assessment, Team, UserProfile } from "@/lib/types";
const db={users:[] as UserProfile[],assessments:[] as Assessment[],teams:[] as Team[]};
export const store={db,reset(){db.users=[];db.assessments=[];db.teams=[];seed();}};
export function seed(){if(db.users.length) return; const users=["Ava","Ben","Carmen","Diego","Eli"].map((n,i)=>({id:`u${i+1}`,name:n,createdAt:new Date().toISOString()})); db.users.push(...users); const team={id:"t1",name:"Demo Product Team",description:"Seeded demo team",inviteCode:"DEMO123",createdBy:"u1",members:users.map(u=>u.id)}; db.teams.push(team);}
seed();
