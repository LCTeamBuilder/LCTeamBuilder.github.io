import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { ChainsOfOthersMeursaultAwakening } from "./ChainsOfOthersMeursaultAwakening";

export class ChainsOfOthersMeursault implements EgoBase{
    readonly Id: number = 20501;
    readonly Name: string = "Chains of Others";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new ChainsOfOthersMeursaultAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Refusal to Judge", PassiveTypeEnum.Ego, "At the start of the combat phase, gain 3 [Protection] if the unit is targeted by 3 or more skills.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 1},
                                                        {sin: SinEnum.Gloom, amount: 1},
                                                        {sin: SinEnum.Envy, amount: 2}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Meursault/EGO/ChainsOfOthers/20501cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Meursault/EGO/ChainsOfOthers/20501profilesummary.png";
}