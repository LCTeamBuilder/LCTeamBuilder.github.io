import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { SodaHongLuAwakening } from "./SodaHongLuAwakening";
import { SodaHongLuCorrosion } from "./SodaHongLuCorrosion";

export class SodaHongLu implements Ego{
    readonly Id: number = 20604;
    readonly Name: string = "Soda";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new SodaHongLuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new SodaHongLuCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Seagull Squawking Of The Distant Seas", PassiveTypeEnum.Ego, "When an enemy is defeated, the ally with the least SP heals 1 SP. Whenever an enemy is defeated, the amount of SP healed increases by 2. (Max 9) The amount is reset at the start of a new wave.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Gloom, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/HongLu/EGO/Soda/20604cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/HongLu/EGO/Soda/20604awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/HongLu/EGO/Soda/20604profilesummary.png";
}