import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { CapoteIshmaelAwakening } from "./CapoteIshmaelAwakening";
import { CapoteIshmaelCorrosion } from "./CapoteIshmaelCorrosion";

export class CapoteIshmael implements Ego{
    readonly Id: number = 20804;
    readonly Name: string = "Capote";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new CapoteIshmaelAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new CapoteIshmaelCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Slaying Amid Cheers", PassiveTypeEnum.Ego, "When attacking a target with less than 30% HP, Wrath skills deal +20% damage.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Sloth, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/EGO/Capote/20804cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ishmael/EGO/Capote/20804awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ishmael/EGO/Capote/20804profilesummary.png";
}