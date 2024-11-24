import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { FourthMatchFlameRodionAwakening } from "./FourthMatchFlameRodionAwakening";
import { FourthMatchFlameRodionCorrosion } from "./FourthMatchFlameRodionCorrosion";

export class FourthMatchFlameRodion implements Ego{
    readonly Id: number = 20902;
    readonly Name: string = "4th Match Flame";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new FourthMatchFlameRodionAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new FourthMatchFlameRodionCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Spark of Flame", PassiveTypeEnum.Ego, "After defeating an enemy that has [Burn], heal HP by (Wrath A-Reson.)% of Max HP.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 3 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Rodion/EGO/4thMatchFlame/20902cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Rodion/EGO/4thMatchFlame/20902awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Rodion/EGO/4thMatchFlame/20902profilesummary.png";
}