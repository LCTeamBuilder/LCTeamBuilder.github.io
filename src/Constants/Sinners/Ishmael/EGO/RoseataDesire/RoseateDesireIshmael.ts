import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { RoseateDesireIshmaelAwakening } from "./RoseateDesireIshmaelAwakening";
import { RoseateDesireIshmaelCorrosion } from "./RoseateDesireIshmaelCorrosion";

export class RoseateDesireIshmael implements Ego{
    readonly Id: number = 20802;
    readonly Name: string = "Roseate Desire";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new RoseateDesireIshmaelAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new RoseateDesireIshmaelCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Pink Ribbons", PassiveTypeEnum.Ego, "On clash win, inflict 1 [Pink Ribbons]");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Lust, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802profilesummary.png";
}