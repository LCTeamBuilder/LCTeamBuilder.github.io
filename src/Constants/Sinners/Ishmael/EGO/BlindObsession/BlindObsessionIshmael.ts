import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { BlindObsessionIshmaelAwakening } from "./BlindObsessionIshmaelAwakening";
import { BlindObsessionIshmaelCorrosion } from "./BlindObsessionIshmaelCorrosion";

export class BlindObsessionIshmael implements Ego{
    readonly Id: number = 20805;
    readonly Name: string = "Blind Obsession";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new BlindObsessionIshmaelAwakening;
    readonly AwakeningSanityCost: number = 35;
    readonly CorrosionSkill?: Skill = new BlindObsessionIshmaelCorrosion;
    readonly CorrosionSanityCost?: number = 35;
    readonly Passive: Passive = new Passive("Temeritous Voyage", PassiveTypeEnum.Ego, "At the end of the turn, inflict 5 [Sinking] to 1 other ally with the lowest HP; Apply 1 [Haste] and 3 [Offense Level Up] next turn");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 0.75},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Gloom, amount: 3 },{sin: SinEnum.Pride, amount: 3 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/EGO/BlindObsession/20805cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ishmael/EGO/BlindObsession/20805awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ishmael/EGO/BlindObsession/20805profilesummary.png";
}