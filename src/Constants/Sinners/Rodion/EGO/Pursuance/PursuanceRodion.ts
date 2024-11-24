import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { PursuanceRodionAwakening } from "./PursuanceRodionAwakening";
import { PursuanceRodionCorrosion } from "./PursuanceRodionCorrosion";

export class PursuanceRodion implements Ego{
    readonly Id: number = 20905;
    readonly Name: string = "Pursuance";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new PursuanceRodionAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new PursuanceRodionCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Sentencing from Above", PassiveTypeEnum.Ego, "Whenever the enemy is Staggered, the ally with the least HP percentage heals 4% of their Max HP");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 0.75},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 4 },{sin: SinEnum.Pride, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Rodion/EGO/Pursuance/20905cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Rodion/EGO/Pursuance/20905awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Rodion/EGO/Pursuance/20905profilesummary.png";
}