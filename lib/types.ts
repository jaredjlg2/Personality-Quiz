export type Trait = "openness"|"conscientiousness"|"extraversion"|"agreeableness"|"neuroticism";
export type StyleKey = "driver"|"explorer"|"stabilizer"|"architect";
export type QuestionnaireItem={id:string;text:string;trait:Trait;reverseScored:boolean};
export type UserProfile={id:string;name:string;email?:string;createdAt:string};
export type Assessment={id:string;userId:string;answers:Record<string,number>;traitScores:Record<Trait,number>;styleScores:Record<StyleKey,number>;primaryStyle:StyleKey;secondaryStyle:StyleKey;createdAt:string};
export type Team={id:string;name:string;description:string;inviteCode:string;createdBy:string;members:string[]};
export type TeamMember={id:string;teamId:string;userId:string;role?:string;assessmentId?:string};
