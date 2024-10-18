import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { NineTwoFaustAwakening } from "./NineTwoFaustAwakening";
import { NineTwoFaustCorrosion } from "./NineTwoFaustCorrosion";

export class NineTwoFaust implements EgoBase{
    readonly Id: number = 20205;
    readonly Name: string = "9:2";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new NineTwoFaustAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new NineTwoFaustCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Flamebrand", PassiveTypeEnum.Ego, "On Heads Hit with a Lust affinity Skill, inflict 1 [Burn] on target (6 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Gluttony, amount: 3 },{sin: SinEnum.Pride, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Faust/EGO/92/20205cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Faust/EGO/92/20205awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Faust/EGO/92/20205profilesummary.png";
}