import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { BranchOfKnowledgeSinclairAwakening } from "./BranchOfKnowledgeSinclairAwakening";

export class BranchOfKnowledgeSinclair implements EgoBase{
    readonly Id: number = 21001;
    readonly Name: string = "Branch of Knowledge";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new BranchOfKnowledgeSinclairAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Unstable", PassiveTypeEnum.Ego, "If a skill's Coin hits with a different side from the previous Coin in the same skill, lose 5 SP and gain 1 [Damage Up] this turn. (3 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.75},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1},
                                                        {sin: SinEnum.Gluttony, amount: 3}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/EGO/BranchOfKnowledge/21001cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Sinclair/EGO/BranchOfKnowledge/21001profilesummary.png";
}