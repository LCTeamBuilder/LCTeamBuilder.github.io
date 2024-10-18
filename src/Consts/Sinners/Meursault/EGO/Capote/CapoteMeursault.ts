import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { CapoteMeursaultAwakening } from "./CapoteMeursaultAwakening";
import { CapoteMeursaultCorrosion } from "./CapoteMeursaultCorrosion";

export class CapoteMeursault implements EgoBase{
    readonly Id: number = 20504;
    readonly Name: string = "Capote";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new CapoteMeursaultAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new CapoteMeursaultCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Untempered Agitation", PassiveTypeEnum.Ego, "At the start of the combat phase, if targeted by 2 or more skills, this unit's skills have +1 Base Power; when hit, inflict 1 [Burn] on the attacker. (5 times per turn.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.75},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Sloth, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Meursault/EGO/Capote/20504cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Meursault/EGO/Capote/20504awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Meursault/EGO/Capote/20504profilesummary.png";
}