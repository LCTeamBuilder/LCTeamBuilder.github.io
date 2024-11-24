import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { HexNailFaustAwakening } from "./HexNailFaustAwakening";
import { HexNailFaustCorrosion } from "./HexNailFaustCorrosion";

export class HexNailFaust implements Ego{
    readonly Id: number = 20203;
    readonly Name: string = "Hex Nail";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new HexNailFaustAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new HexNailFaustCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("It Hurts!", PassiveTypeEnum.Ego, "Deal +10% damage for every negative status effect on this unit. (Up to 50%)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Envy, amount: 6 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Faust/EGO/HexNail/20203cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Faust/EGO/HexNail/20203awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Faust/EGO/HexNail/20203profilesummary.png";
}