import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { LassoFaustAwakening } from "./LassoFaustAwakening";
import { LassoFaustCorrosion } from "./LassoFaustCorrosion";

export class LassoFaust implements Ego{
    readonly Id: number = 20207;
    readonly Name: string = "Lasso";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new LassoFaustAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new LassoFaustCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Sprawling Lasso", PassiveTypeEnum.Ego, "After Attack, if the target is Staggered or defeated, inflict +1 [Rupture] Count against 2 random enemies (once per turn; cannot stack; in Focused Encounters, against 2 random Parts)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.5},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Faust/EGO/Snare/20207cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Faust/EGO/Snare/20207awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Faust/EGO/Snare/20207profilesummary.png";
}