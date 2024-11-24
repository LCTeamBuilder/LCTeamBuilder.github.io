import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { RoseateDesireHongLuAwakening } from "./RoseateDesireHongLuAwakening";
import { RoseateDesireHongLuCorrosion } from "./RoseateDesireHongLuCorrosion";

export class RoseateDesireHongLu implements Ego{
    readonly Id: number = 20602;
    readonly Name: string = "Roseate Desire";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new RoseateDesireHongLuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new RoseateDesireHongLuCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Binding Ribbons", PassiveTypeEnum.Ego, "The target of the leftmost skill on the Dashboard is inflicted with (Lust A-Reson. / 4) [Lust Fragility] next turn.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 4 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/HongLu/EGO/RoseataDesire/20602cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/HongLu/EGO/RoseataDesire/20602awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/HongLu/EGO/RoseataDesire/20602profilesummary.png";
}