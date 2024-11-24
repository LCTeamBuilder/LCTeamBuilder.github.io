import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { HexNailSinclairAwakening } from "./HexNailSinclairAwakening";
import { HexNailSinclairCorrosion } from "./HexNailSinclairCorrosion";

export class HexNailSinclair implements Ego{
    readonly Id: number = 21007;
    readonly Name: string = "Hex Nail";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new HexNailSinclairAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new HexNailSinclairCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Grimy Hide", PassiveTypeEnum.Ego, "Combat Start: if this unit has a negative effect, gain 1 [Clash Power Up] and 1 [Defense Power Up]<br>"+
        "- Gain 1 [Protection] for every 3 negative effect on self (max 2)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/EGO/HexNail/21007cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Sinclair/EGO/HexNail/21007awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Sinclair/EGO/HexNail/21007profilesummary.png";
}